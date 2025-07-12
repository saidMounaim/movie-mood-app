import {
  fetchMovieCredits,
  fetchMovieDetails,
  fetchMovies,
  fetchSearchMovies,
} from "@/api/movies";
import { useQuery } from "@tanstack/react-query";

export const useMovies = (category: string) =>
  useQuery({
    queryKey: ["movies", category],
    queryFn: () => fetchMovies(category),
    enabled: !!category,
    staleTime: 1000 * 60 * 5,
  });

export const useMovieDetails = (id: string) =>
  useQuery({
    queryKey: ["movieDetails", id],
    queryFn: () => fetchMovieDetails(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

export const useMoviesCasts = (id: string) =>
  useQuery({
    queryKey: ["movieCasts", id],
    queryFn: () => fetchMovieCredits(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
  });

export const useSearch = (query: string) =>
  useQuery({
    queryKey: ["searchMovies", query],
    queryFn: () => fetchSearchMovies(query),
    enabled: !!query,
    staleTime: 1000 * 60 * 5,
  });
