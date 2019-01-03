export const FETCH_COMPANY_LIST_BEGIN = 'FETCH_COMPANY_LIST_BEGIN';
export const FETCH_COMPANY_LIST_SUCCESS = 'FETCH_COMPANY_LIST_SUCCESS';
export const FETCH_COMPANY_LIST_FAILURE = 'FETCH_COMPANY_LIST_FAILURE';
export const MARK_COMPANY_FAVOURITE_BEGIN = 'MARK_COMPANY_FAVOURITE_BEGIN';
export const MARK_COMPANY_FAVOURITE_SUCCESS = 'MARK_COMPANY_FAVOURITE_SUCCESS';
export const MARK_COMPANY_FAVOURITE_FAILURE = 'MARK_COMPANY_FAVOURITE_FAILURE';


export const fetchCompanyListsBegin = () => ({
    type: FETCH_COMPANY_LIST_BEGIN,
});

export const fetchCompanyListsSuccess = companylist => ({
    type: FETCH_COMPANY_LIST_SUCCESS,
    payload: {
        companylist
    }
});

export const fetchCompanyListsFailure = error => ({
    type: FETCH_COMPANY_LIST_FAILURE,
    payload: {
        error
    }
});

export const markFavouriteBegin = () => ({
    type: MARK_COMPANY_FAVOURITE_BEGIN,
});

export const markFavouriteSuccess = id => ({
    type: MARK_COMPANY_FAVOURITE_SUCCESS,
    payload: id
});

export const markFavouriteFailure = error => ({
    type: MARK_COMPANY_FAVOURITE_FAILURE,
    payload: {
        error
    }
});

export function fetchCompanyLists(filter) {
    // filter here contains the filters available on the company page.
    return dispatch => {
        dispatch(fetchCompanyListsBegin());
        return fetch('https://koolkanya-backend.herokuapp.com/companies', {
                method: 'post',
                body: JSON.stringify(filter)
            })
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                dispatch(fetchCompanyListsSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchCompanyListsFailure(error)));
    };
}

export function markFavouriteCompany(id) {
    // filter here contains the filters available on the company page.
    return dispatch => {
        dispatch(markFavouriteBegin());
        return fetch('https://koolkanya-backend.herokuapp.com/companies', {
                method: 'post',
                body: JSON.stringify(id)
            })
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                dispatch(markFavouriteSuccess(id));
                return id;
            })
            .catch(error => dispatch(markFavouriteFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}