import { useForm } from "react-hook-form";
import { actions } from "../../actions";
import AddPhotoIcon from "../../assets/icons/addPhoto.svg";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import usePost from "../../hooks/usePost";
import useProfile from "../../hooks/useProfile";
import Field from "../shared/Field";

const PostEntry = ({ onClose }) => {
  const { auth } = useAuth();
  const { state: Profile } = useProfile();
  const { api } = useAxios();
  const { dispatch } = usePost();
  const user = Profile?.user ?? auth?.user;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleAddPost = async (data) => {
    try {
      const formData = new FormData();
      formData.append("content", data.content);
      for (const file of data.photo) {
        formData.append("image", file);
      }

      dispatch({ type: actions.post.DATA_FETCHING });
      const response = await api.post("/posts", formData);

      if (response.status === 200) {
        dispatch({ type: actions.post.POST_CREATED, data: response.data });
        onClose();
      }
    } catch (error) {
      dispatch({ type: actions.post.DATA_FETCH_ERROR, error: error.message });
    }
  };

  return (
    <main className="mx-auto max-w-[1020px] py-8">
      <div className="container">
        <div className="relative card">
          <h6 className="mb-3 text-lg font-bold text-center lg:text-xl">
            Create Post
          </h6>

          <div className="flex items-center justify-between gap-2 mb-3 lg:mb-6 lg:gap-4">
            <div className="flex items-center gap-3">
              <img
                className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
                src={`${import.meta.env.VITE_BASE_SERVER_URL}/${user.avatar}`}
                alt="avatar"
              />
              <div>
                <h6 className="text-lg lg:text-xl">
                  {user?.firstName} {user?.lastName}
                </h6>

                <span className="text-sm text-gray-400 lg:text-base">
                  Public
                </span>
              </div>
            </div>

            <label
              className="btn-primary cursor-pointer !text-gray-100"
              htmlFor="photo"
            >
              <img src={AddPhotoIcon} alt="Add Photo" />
              Add Photo
            </label>
            <input
              {...register("photo")}
              type="file"
              name="photo"
              id="photo"
              className="hidden"
            />
          </div>
          <form onSubmit={handleSubmit(handleAddPost)}>
            <Field label="" error={errors.content}>
              <textarea
                {...register("content", {
                  required: "Adding some text is mandatory!..",
                })}
                name="content"
                id="content"
                placeholder="Share your thoughts..."
                className="h-[120px] w-full bg-transparent focus:outline-none lg:h-[160px]"
              ></textarea>
            </Field>

            <div className="border-t border-[#3F3F3F] pt-4 lg:pt-6">
              <button
                className="font-bold transition-all auth-input bg-lwsGreen text-deepDark hover:opacity-90"
                type="submit"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default PostEntry;
