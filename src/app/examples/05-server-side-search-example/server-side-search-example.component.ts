import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';


@Component({
  selector: 'app-server-side-search-example',
  templateUrl: './server-side-search-example.component.html',
  styleUrls: ['./server-side-search-example.component.scss']
})
export class ServerSideSearchExampleComponent implements OnInit {
  searchMoviesCtrl = new FormControl();
  filteredMovies: any;
  isLoading = false;
  errorMsg: string;

  skills: string[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {


    this.searchMoviesCtrl.valueChanges
      .pipe(
        debounceTime(500),
        tap(() => {
          this.errorMsg = '';
          this.filteredMovies = [];
          this.isLoading = true;
        }),
        switchMap(value => this.http.post('http://10.1.84.223:7474/db/data/transaction/commit',
        {
            statements : [
              { statement : 'MATCH (n) WHERE (n:Framework or n:Tooling or n:ProgrammingLanguage) and n.name CONTAINS "' + value + '" and n.leaf="true" RETURN n.name'
              }]
        }
      )
          .pipe(
            finalize(() => {
              this.isLoading = false;
            }),
          )
        )
      )
      .subscribe(data => {
        if (data['results'][0]['data'] === undefined) {
          this.errorMsg = data['Error'];
          this.filteredMovies = [];
        } else {
          this.errorMsg = '';
          this.filteredMovies = data['results'][0]['data'].map(x => x.row[0]);
        }

        console.log(this.filteredMovies);
      });
  }

  selectSkill(skill: string) {
    this.skills.push(skill);
  }
}
