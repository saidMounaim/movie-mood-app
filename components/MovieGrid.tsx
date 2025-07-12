import { useMovies } from "@/hooks/useMovies";
import { router } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  View,
} from "react-native";

const MovieGrid = ({ category }: { category: string }) => {
  const { data: movies, isLoading } = useMovies(category);
  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="small" color="white" className="mt-5" />
      ) : (
        <FlatList
          data={movies}
          contentContainerClassName="flex flex-col pb-[480px]"
          columnWrapperClassName="flex flex-row mb-5"
          numColumns={3}
          renderItem={({ item }) => (
            <Pressable
              className="w-[32%] flex flex-col"
              onPress={() => router.push(`/movie/${item.id}`)}
            >
              <View className="w-[100px] h-[145px] relative">
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  className="w-full h-full rounded-lg absolute top-0 left-0"
                />
              </View>
            </Pressable>
          )}
        />
      )}
    </>
  );
};

export default MovieGrid;
