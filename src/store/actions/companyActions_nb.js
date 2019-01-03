import { FETCH_POSTS } from "./types";

export const fetchCompanies = () => dispatch => {
    fetch("../api/companies-list")
      .then(res => res.json())
      .then(data => dispatch({
          type: FETCH_POSTS,
          payload: data
    }));
}


