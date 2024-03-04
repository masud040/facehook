import { useRef } from "react";
import { actions } from "../../actions";
import EditIcon from "../../assets/icons/edit.svg";
import useAxios from "../../hooks/useAxios";
import useProfile from "../../hooks/useProfile";
const ProfileImage = () => {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const fileUploadRef = useRef();
  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();
      for (const file of fileUploadRef.current.files) {
        formData.append("avatar", file);
      }
      const response = await api.post(
        `/profile/${state.user.id}/avatar`,
        formData
      );

      if (response.status === 200) {
        dispatch({ type: actions.profile.IMAGE_UPDATED, data: response.data });
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        error: error.message,
      });
    }
  };
  const handleFileUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.addEventListener("change", updateImageDisplay);
    fileUploadRef.current.click();
  };
  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] .lg:max-h-[280px] lg:max-w-[280px] rounded-full">
      <img
        className="h-[150px] w-[150px] rounded-full"
        src={`${import.meta.env.VITE_BASE_SERVER_URL}/${state?.user?.avatar}`}
        alt={state?.user?.firstName}
      />

      <form>
        <button
          type="submit"
          onClick={handleFileUpload}
          className="absolute w-8 h-8 rounded-full flex-center bottom-4 right-4 bg-black/50 hover:bg-black/80"
        >
          <img src={EditIcon} alt="Edit" />
        </button>
        <input ref={fileUploadRef} type="file" name="file" className="hidden" />
      </form>
    </div>
  );
};

export default ProfileImage;
