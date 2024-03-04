import { useState } from "react";
import AddComment from "../comment/AddComment";
import CommentList from "../comment/CommentList";

const PostComments = ({ postInfo }) => {
  const [showAll, setShowAll] = useState(false);
  const [comments, setComments] = useState(postInfo?.comments);

  return (
    <div>
      <AddComment postInfo={postInfo} setComments={setComments} />

      <div className="mt-4">
        <button
          onClick={() => setShowAll((s) => !s)}
          className="text-gray-300 max-md:text-sm"
        >
          All Comment▾
        </button>
      </div>
      {!!showAll && <CommentList comments={comments} />}
    </div>
  );
};

export default PostComments;
