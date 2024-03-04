import useProfile from "../../hooks/useProfile";
import PostCard from "./PostCard";

const PostList = () => {
  const { state } = useProfile();
  const posts = state?.posts;
  return (
    <>
      {!!posts &&
        posts.map((post) => <PostCard key={post.id} postInfo={post} />)}
    </>
  );
};

export default PostList;
