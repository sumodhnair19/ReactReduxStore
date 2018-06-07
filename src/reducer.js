import { POST_FORM , SHOW_LOADER, HIDE_LOADER} from './actions/actionType.js';

const initialState = {};

export default function(state = initialState, action) {

  switch (action.type) {
    case POST_FORM:
      return {
        ...state,
        items: action.payload
      };
      case SHOW_LOADER:
      return {
        ...state,
        loaderState: true
      }
      case HIDE_LOADER:
      return {
        ...state,
        loaderState: false
      }
    default:
      return state;
  }
}
