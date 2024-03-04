import { useEffect, useReducer } from "react";
import { actions } from "../actions";
import PostList from "../components/post/PostList";
import useAxios from "../hooks/useAxios";
import { PostReducer, initalState } from "../reducers/PostReducer";

export default function HomePage() {
  const [state, dispatch] = useReducer(PostReducer, initalState);
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
      <PostList posts={state?.posts} />
    </div>
  );
}
