import {
  FETCH_COMPANY_LIST_BEGIN,
  FETCH_COMPANY_LIST_SUCCESS,
  FETCH_COMPANY_LIST_FAILURE,
  MARK_COMPANY_FAVOURITE_BEGIN,
  MARK_COMPANY_FAVOURITE_SUCCESS,
  MARK_COMPANY_FAVOURITE_FAILURE
} from '../actions/companyActions';

const initialState = {
  items: [],
  loading: false,
  error: null
};

export default function companyListReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMPANY_LIST_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_COMPANY_LIST_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        items: action.payload.companylist
      };

    case FETCH_COMPANY_LIST_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    case MARK_COMPANY_FAVOURITE_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null
      };

    case MARK_COMPANY_FAVOURITE_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      console.log(action.payload)
      let newCompanyList = state.items.companylist.map(element => {
        if (action.payload === element._id) {

          element.isFavourite = element.isFavourite === 'ON' ? "OFF" : "ON"

        }
        return element;
      })
      console.log(newCompanyList.slice(0, 3))
      return {
        ...state,
        loading: false,
        items: { ...state.items,
          companylist: newCompanyList
        }
      };

    case MARK_COMPANY_FAVOURITE_FAILURE:
      // The request failed. It's done. So set loading to "false".
      // Save the error, so we can display it somewhere.
      // Since it failed, we don't have items to display anymore, so set `items` empty.
      //
      // This is all up to you and your app though:
      // maybe you want to keep the items around!
      // Do whatever seems right for your use case.
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}