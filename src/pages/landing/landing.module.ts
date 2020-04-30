import * as firebase from "firebase";

import { store, setSession } from "../../lib";
import * as wrapperModule from "../wrapper/wrapper.module";

export function sessionListener() {
  if (!firebase.apps.length) {
    wrapperModule.setup();
  }
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      store.dispatch(
        setSession({
          active: true,
          user
        })
      );
    } else {
      store.dispatch(
        setSession({
          active: false,
          user: null
        })
      );
    }
  });
}
