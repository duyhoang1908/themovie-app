import React from "react";

const MovieMedia = ({ data }) => {
  return (
    <div className="shrink-0 md:max-w-[300px] w-full px-2 pt-2">
      <p className="text-white font-medium text-lg mb-5">MEDIA</p>
      <ul className="flex flex-col md:gap-[30px] gap-6">
        {data &&
          data.slice(0, 2).map((video) => (
            <li key={video.id}>
              <div className="relative h-0 pb-[56.25%]">
                <iframe
                  frameBorder="0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Video trailer"
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.key}?enablejsapi=1&amp;origin=http%3A%2F%2Flocalhost%3A3000&amp;widgetid=1`}
                  id="widget2"
                  className="absolute top-0 left-0 !w-full !h-full"
                ></iframe>
              </div>
              <p className="mt-3 text-lg whitespace-nowrap overflow-hidden text-ellipsis text-white">
                {video.name}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieMedia;
