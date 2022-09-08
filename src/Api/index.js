import axios from "axios";
import { instance } from "./axios";

export const getPopularFilm = async (page) => {
  try {
    const response = await instance.get("movie/popular", {
      params: {
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTopRateFilm = async (page) => {
  try {
    const response = await instance.get("movie/top_rated", {
      params: {
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUpComingFilm = async (page) => {
  try {
    const response = await instance.get("movie/upcoming", {
      params: {
        page,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getTrendingFilms = async (media_type, time_window) => {
  try {
    const response = await instance.get(
      `trending/${media_type}/${time_window}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieDetail = async (id) => {
  try {
    const response = await instance.get(`movie/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getReviewsWithMovieId = async (id) => {
  try {
    const response = await instance.get(`movie/${id}/reviews`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCreditsWithMovieId = async (id) => {
  try {
    const response = await instance.get(`movie/${id}/credits`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieMedia = async (id) => {
  try {
    const response = await instance.get(`movie/${id}/videos`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSimilar = async (id) => {
  try {
    const response = await instance.get(`/movie/${id}/similar`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecommendations = async (id) => {
  try {
    const response = await instance.get(`movie/${id}/recommendations`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
