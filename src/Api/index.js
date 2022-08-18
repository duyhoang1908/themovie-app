import axios from "axios";

export const getPopularFilm = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=3b16dcd05c706df0ba353580de8bb2f6&page=1"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
