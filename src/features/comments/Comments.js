import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { commentsSelectors, fetchComments } from "./commentsSlice";
import Comment from "./components/Comment";

const Comments = () => {
  const dispatch = useDispatch();

  const allComments = useSelector(commentsSelectors.selectAll);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  return (
    <div className="dark">
      {allComments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
