import React, { useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  commentsSelectors,
  fetchComments,
  deleteComment,
  patchComment,
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
  const handleEdit = useCallback(
    (id, newData) => {
      dispatch(patchComment({ id, newData }));
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
          <Comment
            key={comment.id}
            body={comment.body}
            name={comment.name}
            id={comment.id}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        );
      })}
    </div>
  );
};

export default Comments;
