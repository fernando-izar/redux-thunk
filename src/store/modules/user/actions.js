import { ADD_COMMENT } from "./actionTypes";

export const addComment = (updatedUser) => {
  return {
    type: ADD_COMMENT,
    updatedUser,
  };
};
