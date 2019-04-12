import { ARTICLEID } from '../types/index';
import { createAction } from 'redux-actions';

export const articleId = createAction(ARTICLEID, (articleId) => {
  return new Promise(resolve => {
    resolve(articleId)
  })
})