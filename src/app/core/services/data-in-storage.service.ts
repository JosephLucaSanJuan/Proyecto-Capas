import { Injectable } from "@angular/core";
import { DataService } from "../interfaces/data-service";
import { Model } from "../interfaces/model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataInStorageService<T extends Model> extends DataService<T>{
    constructor() {
        super();
    }

    public override create(value: T): Observable<T> {
        throw new Error("Method not implemented.");
    }

    public override requestAll(): Observable<T[]> {
        return this.records$
    }

    public override requestById(id: string): Observable<T | null> {
        throw new Error("Method not implemented.");
    }

    public override update(id: string, value: T): Observable<T | null> {
        throw new Error("Method not implemented.");
    }

    public override delete(id: string): Observable<T | null> {
        throw new Error("Method not implemented.");
    }
    
}