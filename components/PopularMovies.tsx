import { usePopularMovies } from "@/hooks/usePopularMovies";
import { router } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";

const PopularMovies = () => {
  const { data: popularMovies, isLoading } = usePopularMovies();

  return (
    <View className="flex flex-col">
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" className="mt-10" />
      ) : (
        <FlatList
          data={popularMovies.slice(0, 10)}
          horizontal
          contentContainerClassName="gap-5 pb-7"
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Pressable onPress={() => router.push(`/movie/${item.id}`)}>
              <View className="w-[144px] h-[210px] flex flex-col relative">
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/original${item.poster_path}`,
                  }}
                  className="w-full h-full rounded-xl absolute top-0 left-0"
                  resizeMode="cover"
                />
                <Text className="text-white text-[90px] font-poppins-semibold absolute -bottom-14 -left-2 z-10">
                  {index + 1}
                </Text>
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
};

export default PopularMovies;
