export const FETCH_COMPANY_MARKER_BEGIN = 'FETCH_COMPANY_MARKER_BEGIN';
export const FETCH_COMPANY_MARKER_SUCCESS = 'FETCH_COMPANY_MARKER_SUCCESS';
export const FETCH_COMPANY_MARKER_FAILURE = 'FETCH_COMPANY_MARKER_FAILURE';

export const fetchCompanyMarkersBegin = () => ({
  type: FETCH_COMPANY_MARKER_BEGIN
});

export const fetchCompanyMarkersSuccess = products => ({
  type: FETCH_COMPANY_MARKER_SUCCESS,
  payload: { products }
});

export const fetchCompanyMarkersFailure = error => ({
  type: FETCH_COMPANY_MARKER_FAILURE,
  payload: { error }
});

export function fetchCompanyMarkers() {
  return dispatch => {
    dispatch(fetchCompanyMarkersBegin());
    return fetch("https://koolkanya-backend.herokuapp.com/general/company-marker")
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        var returnvalue=json.map(item=>{
          return item.name;
        })
        // console.log(returnvalue)
        dispatch(fetchCompanyMarkersSuccess(returnvalue));
        return json.products;
      })
      .catch(error => dispatch(fetchCompanyMarkersFailure(error)));
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}