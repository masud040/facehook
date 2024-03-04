import { useEffect } from "react";
import { actions } from "../actions";
import ProfileInfo from "../components/profile/ProfileInfo";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useProfile from "../hooks/useProfile";

export default function ProfilePage() {
  const { state, dispatch } = useProfile();
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
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    }
    getUserProfile();
  }, []);
  if (state.loading) {
    <h1>Fetching your profile data...</h1>;
  }
  return (
    <>
      <ProfileInfo />
    </>
  );
}
