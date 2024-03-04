import { useState } from "react";
import ThreeDotIcon from "../../assets/icons/3dots.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import EditIcon from "../../assets/icons/edit.svg";
import TimeIcon from "../../assets/icons/time.svg";
import { formatTime } from "../../utils";
const PostHeader = ({ postInfo }) => {
  const [showAction, setShowAction] = useState(false);
  formatTime(postInfo.createAt);
  return (
    <header className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img
          className="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
          src={`${import.meta.env.VITE_BASE_SERVER_URL}/${
            postInfo.author.avatar
          }`}
          alt="avatar"
        />
        <div>
          <h6 className="text-lg lg:text-xl">{postInfo.author?.name}</h6>
          <div className="flex items-center gap-1.5">
            <img src={TimeIcon} alt="time" />
            <span className="text-sm text-gray-400 lg:text-base">
              {postInfo.createAt} min ago
            </span>
          </div>
        </div>
      </div>

      <div className="relative">
        <button onClick={() => setShowAction((s) => !s)}>
          <img src={ThreeDotIcon} alt="3dots of Action" />
        </button>

        {!!showAction && (
          <div className="transition delay-800 action-modal-container">
            <button className="action-menu-item hover:text-lwsGreen">
              <img src={EditIcon} alt="Edit" />
              Edit
            </button>
            <button className="action-menu-item hover:text-red-500">
              <img src={DeleteIcon} alt="Delete" />
              Delete
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default PostHeader;
