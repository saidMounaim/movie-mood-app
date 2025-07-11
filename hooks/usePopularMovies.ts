import { fetchPopularMovies } from "@/api/movies";
import { useQuery } from "@tanstack/react-query";

export const usePopularMovies = () =>
  useQuery({
    queryKey: ["popular-movies"],
    queryFn: fetchPopularMovies,
  });
