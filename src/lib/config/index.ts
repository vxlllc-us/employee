const { REACT_APP_BASE } = process.env;

export default {
  routes: {
    home: `${REACT_APP_BASE}/`,
    career: `${REACT_APP_BASE}/career/:id`,
    login: `${REACT_APP_BASE}/login`
  },
};
