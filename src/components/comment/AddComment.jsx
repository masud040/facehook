import { useState } from "react";
import useAvatar from "../../hooks/useAvatar";
import useAxios from "../../hooks/useAxios";

const AddComment = ({ postInfo, setComments }) => {
  const { avatarUrl } = useAvatar(postInfo);
  const [comment, setComment] = useState("");
  const { api } = useAxios();
  const handleAddComment = async () => {
    try {
      const keyCode = event.keyCode;
      if (keyCode === 13) {
        const response = await api.patch(`/posts/${postInfo.id}/comment`, {
          comment,
        });
        if (response?.status === 200) {
          setComments(response?.data?.comments);
          setComment("");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="gap-2 mb-3 flex-center lg:gap-4">
      <img
        className="max-w-7 max-h-7 rounded-full lg:max-h-[34px] lg:max-w-[34px]"
        src={avatarUrl}
        alt="avatar"
      />

      <div className="flex-1">
        <input
          type="text"
          onKeyDown={handleAddComment}
          className="h-8 w-full rounded-full bg-lighterDark px-4 text-xs focus:outline-none sm:h-[38px]"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="What's on your mind?"
        />
      </div>
    </div>
  );
};

export default AddComment;
