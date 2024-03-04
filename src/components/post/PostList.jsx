import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  return (
    <>
      {!!posts &&
        posts.map((post) => <PostCard key={post.id} postInfo={post} />)}
    </>
  );
};

export default PostList;
