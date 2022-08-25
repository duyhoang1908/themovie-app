import React, { useState } from "react";
import defaultAvatar from "../../media/images/defaultAvatar.jpg";

const CommentText = ({ comment }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const deleteFirstLetter = (str) => {
    let del_str = str.replace("/", "");
    return del_str;
  };

  return (
    <li key={comment.id} className="flex gap-7">
      <div className="shrink-0 h-[60px]">
        <span className=" lazy-load-image-background opacity lazy-load-image-loaded">
          <img
            src={
              comment.author_details.avatar_path
                ? deleteFirstLetter(comment.author_details.avatar_path)
                : defaultAvatar
            }
            alt=""
            className="w-[60px] h-[60px] rounded-full object-cover"
          />
        </span>
      </div>

      <div className="flex-grow">
        <p className="text-white">{comment.author}</p>
        <span>
          {isShowMore ? comment.content : comment.content.substring(0, 100)}{" "}
          {isShowMore ? (
            <span
              className="cursor-pointer text-white"
              onClick={() => setIsShowMore(!isShowMore)}
            >
              ...less
            </span>
          ) : (
            <span
              className="cursor-pointer text-white"
              onClick={() => setIsShowMore(!isShowMore)}
            >
              ...more
            </span>
          )}
        </span>
        <p className="text-right text-base">{comment.updated_at}</p>
      </div>
    </li>
  );
};

export default CommentText;
