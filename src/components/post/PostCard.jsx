import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostComment from "./PostComment";
import PostHeader from "./PostHeader";

const PostCard = ({ postInfo }) => {
  return (
    <article className="mt-6 card lg:mt-8">
      <PostHeader postInfo={postInfo} />
      <PostBody imageUrl={postInfo.image} content={postInfo?.content} />
      <PostAction
        postId={postInfo.id}
        commentCount={postInfo?.comments?.length}
      />
      <PostComment postInfo={postInfo} />
    </article>
  );
};

export default PostCard;
