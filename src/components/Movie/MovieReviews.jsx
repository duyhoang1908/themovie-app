import React, { useState } from "react";
// import ShowMoreText from "react-show-more-text";
import defaultAvatar from "../../media/images/defaultAvatar.jpg";
import CommentText from "./CommentText";

const MovieReviews = ({ reviews }) => {
  const [comments, setCommments] = useState(reviews);
  const [sort, setSort] = useState("asc");

  const handleSortReviews = (e) => {
    setSort(e);
    if (e === "asc") {
      const newList = reviews.sort((a, b) => a.updated_at - b.updated_at);

      setCommments(newList);
    } else {
      const newList = reviews.sort((a, b) => b.updated_at - a.updated_at);

      setCommments(newList);
    }
  };

  console.log(comments);

  return (
    <div className="mt-10 text-lg">
      {!reviews.length ? (
        <p className="text-center text-white text-lg">
          There is no reviews yet.
        </p>
      ) : (
        <div className="text-[#989898]">
          <div className="flex gap-4 justify-end -mt-5 mb-10">
            <p>Sort Rating: </p>
            <select
              name=""
              id=""
              value={sort}
              className="outline-none bg-inherit"
              onChange={(e) => {
                handleSortReviews(e.target.value);
              }}
            >
              <option value="asc" className="bg-[#1C1C1E]">
                Ascending
              </option>
              <option value="desc" className="bg-[#1C1C1E]">
                Descending
              </option>
            </select>
          </div>

          <ul className="flex flex-col gap-12 max-h-[400px] overflow-y-auto pr-4 home__container">
            {comments.map((comment) => (
              <CommentText comment={comment}/>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieReviews;
