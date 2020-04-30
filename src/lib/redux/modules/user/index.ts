import { UserInfo } from "firebase";

export const SET_SESSION = "SET_SESSION";

export interface Session {
  active: boolean;
  user: UserInfo | null;
}

export interface RuntimeState {
  session: Session;
}

export enum Actions {
  SET_SESSION = "SET_SESSION"
}

export interface SetSessionAction {
  type: Actions;
  payload: Session;
}

export type SessionActionTypes = SetSessionAction;

export function setSession(session: Session): SessionActionTypes {
  return {
    type: Actions.SET_SESSION,
    payload: session
  }
}
