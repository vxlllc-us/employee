/*
Customer
 |- id
 |- name

Project
 |- id
 |- customer-id
 |- name

Activity
 |- id
 |- name
*/

export interface ICustomer {
  id: string;
  name: string;
}

export interface IProject {
  id: string;
  customer: ICustomer | string;
  name: string;
}

export interface IActivity {
  id: string;
  name: string;
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  customer: ICustomer | string;
  project: IProject | string;
  activity: IActivity | string;
  startDate: number;
  endDate: number;
  duration: number;
  client: string; // task id from slack/jira..
}

