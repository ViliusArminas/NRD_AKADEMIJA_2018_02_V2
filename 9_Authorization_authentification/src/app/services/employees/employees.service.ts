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

    getItem(id): Observable<EmployeeModel> {
        return this.http.get(this.url + '/' + id)
            .map((res: Response) => res.json() as EmployeeModel)
            .catch((error: any) => Observable.throw(error));
    }

    saveItem(item): Observable<any> {
        return this.http.post(this.url, item)
            .map((res: Response) => res.json() as any[])
            .catch((error: any) => Observable.throw(error));
    }

    updateItem(item): Observable<any> {
        return this.http.put(this.url + '/' + item.id, item)
            .map((res: Response) => res.json() as any[])
            .catch((error: any) => Observable.throw(error));
    }


    deleteItem(id): Observable<any[]> {
        return this.http.delete(this.url + '/' + id)
            .map((res: Response) => res.json() as any)
            .catch((error: any) => Observable.throw(error));
    }

}
