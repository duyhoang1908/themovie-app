import axios from "axios";

export const getPopularFilm = async (page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=3b16dcd05c706df0ba353580de8bb2f6&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTopRateFilm = async (page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=3b16dcd05c706df0ba353580de8bb2f6&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUpComingFilm = async (page) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=3b16dcd05c706df0ba353580de8bb2f6&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTrendingFilms = async (media_type, time_window) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=3b16dcd05c706df0ba353580de8bb2f6`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetail = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=3b16dcd05c706df0ba353580de8bb2f6`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getReviewsWithMovieId = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=3b16dcd05c706df0ba353580de8bb2f6`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCreditsWithMovieId = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=3b16dcd05c706df0ba353580de8bb2f6`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieMedia = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=3b16dcd05c706df0ba353580de8bb2f6`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSimilar = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=3b16dcd05c706df0ba353580de8bb2f6`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const getRecommendations = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=3b16dcd05c706df0ba353580de8bb2f6`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
