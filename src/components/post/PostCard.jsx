import PostAction from "./PostAction";
import PostBody from "./PostBody";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";

const PostCard = ({ postInfo }) => {
  return (
    <article className="mt-6 card lg:mt-8">
      <PostHeader postInfo={postInfo} />
      <PostBody imageUrl={postInfo.image} content={postInfo?.content} />
      <PostAction
        postInfo={postInfo}
        commentCount={postInfo?.comments?.length}
      />
      <PostComments postInfo={postInfo} />
    </article>
  );
};

export default PostCard;
