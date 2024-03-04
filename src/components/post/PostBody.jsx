const PostBody = ({ imageUrl, content }) => {
  return (
    <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl">
      {!!imageUrl && (
        <div className="flex items-center justify-center overflow-hidden">
          <img
            className="max-w-full"
            src={`${import.meta.env.VITE_BASE_SERVER_URL}/${imageUrl}`}
            alt="poster"
          />
        </div>
      )}
      <p>{content ? content : "No Content Available."}</p>
    </div>
  );
};

export default PostBody;
