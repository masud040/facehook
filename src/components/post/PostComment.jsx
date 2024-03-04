import { useState } from "react";
import AddComment from "../comment/AddComment";
import CommentList from "../comment/CommentList";

const PostComment = ({ postInfo }) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div>
      <AddComment />
      <div className="mt-4">
        <button
          onClick={() => setShowAll((s) => !s)}
          className="text-gray-300 max-md:text-sm"
        >
          All Comment▾
        </button>
      </div>
      {!!showAll && <CommentList comments={postInfo?.comments} />}
    </div>
  );
};

export default PostComment;
