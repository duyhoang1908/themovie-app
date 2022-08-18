import React, { useState } from "react";
import HomeMovie from "./HomeMovie";
import HomeTVshow from "./HomeTVshow";

const HomeContent = () => {
  const [isTVshow, setTVshow] = useState(true);
  return (
    <div className="py-[28px] px-[15px] border-r border-[#808080]">
      {isTVshow ? (
        <HomeTVshow isTVshow={isTVshow} setTVshow={setTVshow} />
      ) : (
        <HomeMovie isTVshow={isTVshow} setTVshow={setTVshow} />
      )}
    </div>
  );
};

export default HomeContent;
