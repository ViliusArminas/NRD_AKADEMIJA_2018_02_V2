import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { EmployeeModel } from '../../models/employees/employees.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployeeService {

    url = 'http://localhost:3000/employees';

    constructor(private http: Http) { }

    getList(): Observable<EmployeeModel[]> {
        return this.http.get(this.url)
            .map((res: Response) => res.json() as EmployeeModel[])
            .catch((error: any) => Observable.throw(error));
    }
}
