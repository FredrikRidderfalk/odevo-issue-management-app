import { Action } from '@ngrx/store'
import { Task } from '../models/task';
import * as TaskActions from '../actions/task.actions'

const initialState: Task = {
    brf!: "",
    description!: "",
    contact!: "",
    read!: false,
    addedToCalendar!: false
}

export function reducer(state: Task[] = [initialState], action: TaskActions.Actions) {

    switch(action.type) {
        case TaskActions.REPORT_ISSUE:
            return [...state, action.payload];
        default:
            return state;
    }
}