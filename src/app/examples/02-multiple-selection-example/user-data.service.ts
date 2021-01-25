// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// Libraries
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators';


@Injectable()
export class UserDataService {


    // --------------------------------------------------
    //                     CONSTRUCTOR
    // --------------------------------------------------

    /**
     * Constructor
     * @param http
     * @param userService
     */
    constructor(private http: HttpClient) {}

    // --------------------------------------------------
    //                     METHODS
    // --------------------------------------------------

    /**
     * Get all skills.
     * @returns {Observable<User[]>}
     */
    getSkills(): Observable<any[]> {
        const body = {
            statements : [ {
                statement : 'MATCH (n:Job {leaf:"true"}) return n.name'
            } ]
        };
        return this.http.post('http://10.1.84.223:7474/db/data/transaction/commit', body).pipe(
            map((data: any) => {
                return data.results[0].data;
            })
        );
    }

}
