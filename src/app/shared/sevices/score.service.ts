import { Injectable, Input } from '@angular/core';
import { Person } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  static amountPoints: number;
  private accountedPeople: Array<Person>;

  constructor() {
    ScoreService.amountPoints = 0;
    this.accountedPeople = [];
  }

  answareQuestion(name:string, person: Person) {
    let peopleArr = this.accountedPeople
      .filter(person => person.name.toLowerCase() === name.toLowerCase())
    if (peopleArr.length === 0) {
      if(name.toLowerCase() === person.name.toLowerCase()) {
        this.plusAmount(person);
      }
    }
  }

  private plusAmount(person: Person) {
    if (person.seeDetails) {
      ScoreService.amountPoints += 5;
    } else {
      ScoreService.amountPoints += 10;
    }
    this.accountedPeople.push(person)
  }
}
