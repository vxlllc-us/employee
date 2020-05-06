import React from "react";
import { ITask } from "../../lib/types/task";

import "./task.scss";

const slack = require("../../res/assets/images/logos/slack.png");
const jira = require("../../res/assets/images/logos/jira.png");

interface Props {
  task: ITask;
}
export default class Task extends React.Component<Props, any> {
  renderClient = () => {
    const { client } = this.props.task;
    switch (client) {
      case "slack":
        return slack;
      case "jira":
        return jira;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="task-container">
        <div className="client">
          <img src={this.renderClient()} />
        </div>
        <div className="title">
          <span>{this.props.task.title}</span>
        </div>
        <div className="task-id">
          <span>{this.props.task.id.split("-")[0]}</span>
        </div>
      </div>
    );
  }
}
