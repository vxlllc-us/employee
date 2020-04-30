import { Actions, setSession, RuntimeState, SetSessionAction } from "./user";

const initialState: RuntimeState = {
  session: {
    active: false,
    user: null
  }
};
export function runtime(
  state: RuntimeState = initialState,
  action: SetSessionAction
): RuntimeState {
  switch (action.type) {
    case Actions.SET_SESSION:
      return {
        ...state,
        session: action.payload
      };

    default:
      return state;
  }
}

export {
  setSession
}
