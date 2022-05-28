import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DataService {
    private messageSource = new BehaviorSubject<string>("default message")
    currentMessage = this.messageSource.asObservable()

    constructor() { }

    changeMessage(tasks: any) {
        this.messageSource.next(tasks)
    }
}