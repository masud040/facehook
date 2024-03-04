import SingleComment from "./SingleComment";

const CommentList = ({ comments }) => {
  return (
    <div className="pl-2 space-y-4 divide-y divide-lighterDark lg:pl-3">
      {!!comments &&
        comments.map((comment) => (
          <SingleComment key={comment.id} comment={comment} />
        ))}
    </div>
  );
};

export default CommentList;
