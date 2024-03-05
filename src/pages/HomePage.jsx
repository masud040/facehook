import { useEffect } from "react";
import { actions } from "../actions";
import NewPost from "../components/post/NewPost";
import PostList from "../components/post/PostList";
import useAxios from "../hooks/useAxios";
import usePost from "../hooks/usePost";

export default function HomePage() {
  const { state, dispatch } = usePost();
  const { api } = useAxios();
  useEffect(() => {
    dispatch({ type: actions.post.DATA_FETCHING });
    async function fetchPosts() {
      try {
        const response = await api.get("/posts");
        if (response.status === 200) {
          dispatch({ type: actions.post.DATA_FETCHED, data: response.data });
        }
      } catch (error) {
        dispatch({ type: actions.post.DATA_FETCH_ERROR, error: error.message });
      }
    }

    fetchPosts();
  }, []);
  if (state?.loading) {
    return <h1>Loading posts data....</h1>;
  }
  return (
    <div>
      <NewPost />
      <PostList posts={state?.posts} />
    </div>
  );
}
