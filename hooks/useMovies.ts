import { fetchMovies } from "@/api/movies";
import { useQuery } from "@tanstack/react-query";

export const useMovies = (category: string) =>
  useQuery({
    queryKey: ["movies", category],
    queryFn: () => fetchMovies(category),
    enabled: !!category,
    staleTime: 1000 * 60 * 5,
  });
