const { REACT_APP_BASE } = process.env;

export default {
  routes: {
    landing: `${REACT_APP_BASE}/`,
    home: `${REACT_APP_BASE}/home`,
    login: `${REACT_APP_BASE}/login`
  },
};
