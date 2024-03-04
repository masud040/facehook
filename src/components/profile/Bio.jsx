import { useState } from "react";
import { actions } from "../../actions";
import CheckButton from "../../assets/icons/check.svg";
import EditButton from "../../assets/icons/edit.svg";
import useAxios from "../../hooks/useAxios";
import useProfile from "../../hooks/useProfile";
const Bio = () => {
  const { state, dispatch } = useProfile();
  const [bio, setBio] = useState();
  const [editMode, setEditMode] = useState(false);
  const { api } = useAxios();

  const handleEditBio = async () => {
    try {
      dispatch({ type: actions.profile.DATA_FETCHING });
      const response = await api.patch(
        `/profile/${state?.user?.id}
        `,
        { bio }
      );

      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response.data,
        });
        setEditMode(false);
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };
  return (
    <div className="flex items-start gap-2 mt-4 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">
            {state?.user?.bio}
          </p>
        ) : (
          <textarea
            className="p-2 leading-[188%] text-gray-600 lg:text-lg rounded-md focus:outline-gray-500"
            rows={4}
            cols={50}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        )}
      </div>

      {!editMode ? (
        <button
          onClick={() => setEditMode(true)}
          className="rounded-full flex-center h-7 w-7"
        >
          <img src={EditButton} alt="Edit" />
        </button>
      ) : (
        <button
          onClick={handleEditBio}
          className="rounded-full flex-center h-7 w-7"
        >
          <img src={CheckButton} alt="Check" />
        </button>
      )}
    </div>
  );
};

export default Bio;
