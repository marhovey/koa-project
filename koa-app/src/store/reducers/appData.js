import { handleActions } from 'redux-actions';
import { ARTICLEID } from '../types/index';

export default handleActions({
  [ARTICLEID](state, action) {
    return {
      ...state,
      articleId: action.payload
    }
  },
}, {})