import * as types from './actionTypes';
import testApi from '../api/test';

export function getTest() {
  return dispatch => {
    testApi.getTest()
      .then(
        test => {
          dispatch(loadTest(test));
        },
        err => {
          console.log(err)
        }
      );
    }
}

export function loadTest(test) {
  return { type: types.ACTION_TEST, test };
}
