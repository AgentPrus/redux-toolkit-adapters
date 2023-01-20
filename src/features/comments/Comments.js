import React, { useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  commentsSelectors,
  fetchComments,
  deleteComment,
} from "./commentsSlice";
import Comment from "./components/Comment";

const Comments = () => {
  const dispatch = useDispatch();

  const allComments = useSelector(commentsSelectors.selectAll);

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteComment(id));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className="dark">
      {allComments.map((comment) => {
        return (
          <Comment key={comment.id} comment={comment} onDelete={handleDelete} />
        );
      })}
    </div>
  );
};

export default Comments;
