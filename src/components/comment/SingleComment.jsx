const SingleComment = ({ comment }) => {
  return (
    <div className="flex items-center gap-3 pt-4">
      <img
        className="rounded-full max-w-6 max-h-6"
        src={`${import.meta.env.VITE_BASE_SERVER_URL}/${
          comment.author?.avatar
        }`}
        alt={comment.author.name}
      />
      <div>
        <div className="flex gap-1 text-xs lg:text-sm">
          <span>{comment?.author?.name}</span>
          <span>{comment?.comment}</span>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
