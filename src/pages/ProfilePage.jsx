import { useEffect } from "react";
import { actions } from "../actions";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useProfile from "../hooks/useProfile";

export default function ProfilePage() {
  const { state, dispatch } = useProfile();
  console.log(state);
  const { auth } = useAuth();
  const { api } = useAxios();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    async function getUserProfile() {
      try {
        const response = await api.get(`/profile/${auth.user?.id}
      `);

        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({ type: actions.profile.DATA_FETCH_ERROR });
      }
    }
    getUserProfile();
  }, []);
  if (state.loading) {
    <h1>Fetching your profile data...</h1>;
  }
  return <div>Profile</div>;
}
