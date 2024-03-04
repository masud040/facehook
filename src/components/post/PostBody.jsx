const PostBody = ({ postInfo }) => {
  return (
    <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
      {!!postInfo?.image && (
        <div className="flex items-center justify-center overflow-hidden">
          <img
            className="max-w-full"
            src={`${import.meta.env.VITE_BASE_SERVER_URL}/${postInfo.image}`}
            alt="poster"
          />
        </div>
      )}
      <p>{postInfo.content}</p>
    </div>
  );
};

export default PostBody;
