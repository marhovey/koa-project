import { handleActions } from 'redux-actions';
import { ARTICLEID } from '../types/index';

export default handleActions({
  [ARTICLEID](state, action) {
    console.log(state, action.payload)
    return {
      ...state,
      articleId: action.payload
    }
  },
}, {})