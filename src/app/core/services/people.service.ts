import { Injectable } from '@angular/core';
import { DataService } from '../interfaces/data-service';
import { Person } from '../interfaces/person';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(
    private dataSVC:DataService<Person>
  ) { }

  addPerson(person:Person):Observable<Person>{
    return this.dataSVC.create(person)
  }

  updatePerson(id:string, person:Person):Observable<Person|null>{
    return this.dataSVC.update(id, person)
  }

  deletePerson(id:string):Observable<Person|null>{
    return this.dataSVC.delete(id)
  }

  getAll():Observable<Person[]>{
    return this.dataSVC.records$
  }
  
  getPerson(id:string):Observable<Person|null>{
    return this.dataSVC.requestById(id)
  }
}
