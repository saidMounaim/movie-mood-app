import { toSnakeCase } from "@/lib/utils";
import axios from "axios";

export const fetchPopularMovies = async () => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/movie/popular",
    {
      params: {
        api_key: process.env.EXPO_PUBLIC_API_KEY,
        language: "en-US",
      },
    }
  );
  return data.results;
};

export const fetchMovies = async (category: string) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${toSnakeCase(category)}`,
    {
      params: {
        api_key: process.env.EXPO_PUBLIC_API_KEY,
        language: "en-US",
      },
    }
  );
  return data.results;
};

export const fetchMovieDetails = async (id: string) => {
  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
    params: {
      api_key: process.env.EXPO_PUBLIC_API_KEY,
      language: "en-US",
    },
  });
  return data;
};

export const fetchMovieCredits = async (id: string) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits`,
    {
      params: {
        api_key: process.env.EXPO_PUBLIC_API_KEY,
        language: "en-US",
      },
    }
  );
  return data;
};

export const fetchSearchMovies = async (query: string) => {
  const { data } = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        api_key: process.env.EXPO_PUBLIC_API_KEY,
        language: "en-US",
        query,
      },
    }
  );
  return data.results;
};
