import { userConstants } from '../_constants/user.constants';

function registration(state = {}, action) {
  switch (action.type) {
    case userConstants.STUDENT_REGISTRATION:
      return { registered: true };
    case userConstants.TEACHER_REGISTRATION:
      return { registered: true };
    case userConstants.USER_REGISTRATION_FAILURE:
      return {};
    default:
      return state
  }
}