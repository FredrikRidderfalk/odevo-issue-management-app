import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Task } from '../models/task'

export const REPORT_ISSUE = '[ISSUE] Report'
export const REMOVE_TASK = '[TASK] Resolve'

export class ReportIssue implements Action {
    readonly type = REPORT_ISSUE

    constructor(public payload: Task) {}
}

export class RemoveTask implements Action {
    readonly type = REMOVE_TASK

    constructor(public payload: number) {}
}

// export type Actions = ReportIssue | RemoveTask
export type Actions = any