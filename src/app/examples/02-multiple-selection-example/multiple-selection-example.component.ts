import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject} from 'rxjs';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-multiple-selection-example',
  templateUrl: './multiple-selection-example.component.html',
  styleUrls: ['./multiple-selection-example.component.scss']
})
export class MultipleSelectionExampleComponent implements OnInit {

  /** list of banks */
  protected jobs: string[] = [];

  /** control for the MatSelect filter keyword multi-selection */
  public form: FormControl = new FormControl();

  /** list of banks filtered by search keyword */
  public filteredJobsMulti: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {

    this.userDataService.getSkills().subscribe((data: any[]) => {
      this.jobs = data.map(x => x.row[0]);
    });
  }
}
