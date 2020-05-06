import React from "react";
import DataTable, { createTheme } from "react-data-table-component";
import * as modules from "./home.module";
import "./home.scss";
import { Task } from "../../components";
import { ITask } from "../../lib/types/task";

const dummyData = require("../../lib/config/mock-data.json");
const columns = [
  {
    name: "source",
    selector: "client",
    sortable: true,
    grow: 1,
    maxWidth: "5vw"
  },
  {
    name: "Title",
    selector: "title",
    cell: (row: any) => <div style={{ width: "130px" }}>{row.title}</div>,
    sortable: true,
    grow: 1,
    maxWidth: "10vw"
  },
  {
    name: "Description",
    selector: "description",
    sortable: true,
    grow: 2,
    maxWidth: "30vw"
  },
  {
    name: "Duration",
    selector: "duration",
    sortable: true,
    grow: 1,
    maxWidth: "10vw"
  }
];

export default class Home extends React.Component {
  signOut(e: React.MouseEvent<HTMLButtonElement>): any {
    e.preventDefault();

    modules.signOut((err?: Error) => {
      if (err) {
        alert(err.message);
      }
    });
  }

  renderTasks = (): React.ReactElement[] => {
    return dummyData.tasks.map((task: ITask) => {
      return <Task key={task.id} task={task} />;
    });
  };

  render() {
    return (
      <div className="home-root">
        <div className="side-drawer"></div>
        <div className="container">
          <DataTable
            style={{ width: "90vw" }}
            columns={columns}
            data={dummyData.tasks}
          />
        </div>
      </div>
    );
  }
}
