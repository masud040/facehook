import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useProfile from "../../hooks/useProfile";
import PostEntry from "./PostEntry";

const NewPost = () => {
  const { auth } = useAuth();
  const { state: Profile } = useProfile();
  const user = Profile?.user ?? auth?.user;
  const [showPostEntry, setShowPostEntry] = useState(false);
  return (
    <>
      {showPostEntry ? (
        <PostEntry onClose={() => setShowPostEntry(false)} />
      ) : (
        <div className="card">
          <div className="gap-2 mb-3 flex-center lg:gap-4">
            <img
              className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
              src={`${import.meta.env.VITE_BASE_SERVER_URL}/${user.avatar}`}
              alt="avatar"
            />

            <div className="flex-1">
              <textarea
                className="w-full h-16 p-3 rounded-md bg-lighterDark focus:outline-none sm:h-20 sm:p-6"
                name="post"
                id="post"
                onClick={() => setShowPostEntry(true)}
                placeholder="What's on your mind?"
              ></textarea>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewPost;
