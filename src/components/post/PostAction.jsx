import { useState } from "react";
import CommentIcon from "../../assets/icons/comment.svg";
import LikeFieldIcon from "../../assets/icons/like-field.svg";
import LikeIcon from "../../assets/icons/like.svg";
import ShareIcon from "../../assets/icons/share.svg";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
const PostAction = ({ postInfo, commentCount }) => {
  const { auth } = useAuth();

  const [liked, setIsLike] = useState(
    postInfo?.likes?.includes(auth?.user?.id)
  );
  const { api } = useAxios();

  const handleLike = async () => {
    try {
      const response = await api.patch(`/posts/${postInfo?.id}/like`);

      if (response?.status === 200) {
        setIsLike(true);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-between py-6 lg:px-10 lg:py-8">
      <button
        onClick={handleLike}
        className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm"
      >
        <img
          className="w-6"
          src={liked ? LikeFieldIcon : LikeIcon}
          alt="Like"
        />
        {!liked && <span>Like</span>}
      </button>

      <button className="px-6 py-3 space-x-2 text-xs icon-btn lg:px-12 lg:text-sm">
        <img src={CommentIcon} alt="Comment" />
        <span>Comment({commentCount ?? 0})</span>
      </button>

      <button className="flex-center gap-2 text-xs font-bold text-[#B8BBBF] hover:text-white lg:text-sm">
        <img src={ShareIcon} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
};

export default PostAction;
