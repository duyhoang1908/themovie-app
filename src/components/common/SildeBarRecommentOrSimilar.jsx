import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getRecommendations, getSimilar } from "../../Api";
import Loader from "../Loader";
import SearchInput from "./SearchInput";
import Skeleton from "./Skeleton";

const SildeBarRecommentOrSimilar = ({type, id}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            if(type === "Similar")
            {
                const responsive = await getSimilar(id)
                setData(responsive.results)
            }
            else{
                const responsive = await getRecommendations(id)
                setData(responsive.results)
            }

            setIsLoading(false)
        }

        fetchData()
    },[type, id])

  return (
    <div>
      {isLoading ? (
        <div>
          <SearchInput />
          <div className="flex mb-6 mt-5">
            <Skeleton className="h-4 w-[100px]"/>
          </div>
          <ul className="flex flex-col gap-5">
                {Array(3).fill(0).map((item, index) => (
                  <li key={index}>
                    <div className="flex gap-3">
                      <div className="shrink-0 max-w-[100px] w-full">
                        <Skeleton className="w-full h-[150px]"/>
                      </div>
                      <div className="flex flex-col justify-around">
                        <Skeleton className="w-[150px] h-5"/>
                        <Skeleton className="w-16 h-5"/>
                        <Skeleton className="w-10 h-5"/>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
        </div>
      ) : (
        <div>
          {data.length?(
            <div>
              <div className="w-full hidden md:block">
              <SearchInput />
              </div>
              <div className="flex">
                <p className="mb-6 mt-4 text-xl font-medium flex justify-between items-center text-white">
                  {type}
                </p>
              </div>
              <ul className="flex flex-col gap-5">
                {data.slice(0, 3).map((movie) => (
                  <li>
                    <Link to={`/movie/${movie.id}`} className="flex gap-3">
                      <div className="shrink-0 max-w-[100px] w-full">
                        <span className=" ">
                          <img
                            src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
                            alt=""
                          />
                        </span>
                      </div>
                      <div className="flex-grow">
                        <p className="text-white mb-3 text-lg">
                          {movie.original_title}
                        </p>
                        <p className="mb-8 text-[#989898]">{movie.release_date}</p>
                        <div className="inline-flex gap-2 items-center px-3 py-[2px] rounded-full text-[#3D5BC0] border border-[#3D5BC0] text-sm">
                          <span>{movie.vote_average.toFixed(1)}</span>
                          <div>
                            <FaStar />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link to="/">
                <div className="w-[100%] mt-7 py-2 bg-[#333335] text-[#989898] text-center rounded-full cursor-pointer">
                  See more
                </div>
              </Link>
            </div>
          ):<div>
            <SearchInput />
              <p className="text-white text-center mt-5">No {type}</p>
            </div>}
        </div>
      )}
    </div>
  );
};

export default SildeBarRecommentOrSimilar;
