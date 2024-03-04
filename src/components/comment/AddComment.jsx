import useProfile from "../../hooks/useProfile";

const AddComment = () => {
  const { state } = useProfile();
  return (
    <div className="gap-2 mb-3 flex-center lg:gap-4">
      <img
        className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
        src={`${import.meta.env.VITE_BASE_SERVER_URL}/${state?.user?.avatar}`}
        alt="avatar"
      />

      <div className="flex-1">
        <input
          type="text"
          className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
          name="post"
          id="post"
          placeholder="What's on your mind?"
        />
      </div>
    </div>
  );
};

export default AddComment;
