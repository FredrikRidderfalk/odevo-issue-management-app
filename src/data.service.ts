import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

// @Injectable()
// export class DataService {

    // attempt 1 - failed
//     // private messageSource = new BehaviorSubject<any>("default message")
//     // currentMessage = this.messageSource.asObservable()
//     // changeMessage(tasks: any) {
//     //     this.messageSource.next(tasks)
//     // }

//     constructor() { }

    // attempt 2 - failed
//     public editDataDetails: any = [];
//     public subject = new Subject<any>();
//     private messageSource = new BehaviorSubject(this.editDataDetails);
//     currentMessage = this.messageSource.asObservable();
//     changeMessage(message: any) {
//     this.messageSource.next(message)
//     }
// }

// @Injectable()
// export class DataSharingService {
//     private subject = new Subject<any>()

//     sendData(data: any) {
//         this.subject.next({ text: data })
//     }

//     clearData() {
//         this.subject.next()
//     }

//     getData(): Observable<any> {
//         return this.subject.asObservable()
//     }
// }