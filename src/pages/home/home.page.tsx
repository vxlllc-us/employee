import React from "react";

import * as modules from "./home.module";
import "./home.scss";

function signOut(e: React.MouseEvent<HTMLButtonElement>): any {
  e.preventDefault();

  modules.signOut((err?: Error) => {
    if (err) {
      alert(err.message);
    }
  });
}

const Home: React.FC = (props: any): React.ReactElement => {
  return (
    <div className={"home-root"}>
      <h1>Home</h1>
      <button onClick={signOut}>Logout</button>
    </div>
  );
};

export default Home;
