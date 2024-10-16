import { Injectable } from "@angular/core";
import { DataService } from "../interfaces/data-service";
import { Person } from "../interfaces/person";
import { BehaviorSubject, Observable } from "rxjs";
import { Model } from "../interfaces/model";

@Injectable({
    providedIn: 'root'
})
export class DataInMemoryService<T extends Model> extends DataService<T> {

    /*private _records:BehaviorSubject<T[]> = new BehaviorSubject<T[]>([])
    public records$:Observable<T[]> = this._records.asObservable()*/

    private generarID():string {
        const caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789"
        let codigo = ""
        for (let index = 0; index < 10; index++) {
            const element = Math.floor(Math.random()*caracteres.length)
            codigo += caracteres[element];
        }
        return codigo
    }

    create(value: T): Observable<T> {
        return new Observable((observer)=>{
            value.id = this.generarID()
            const _records = this._records.value;
            this._records.next([..._records, value]);
            observer.next(value)
            observer.complete()
        })
    }

    requestAll(): Observable<T[]> {
        return this.records$;
    }

    requestById(id: string): Observable<T> {
        return new Observable((observer)=>{})
    }

    update(id: string, value: T): Observable<T> {
        throw new Error("Method not implemented.");
    }
    
    delete(id: string): Observable<T> {
        throw new Error("Method not implemented.");
    }

}