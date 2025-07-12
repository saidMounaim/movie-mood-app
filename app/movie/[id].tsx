import Header from "@/components/Header";
import { images } from "@/constants";
import { useMovieDetails, useMoviesCasts } from "@/hooks/useMovies";
import cn from "clsx";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MovieDetails = () => {
  const { id } = useLocalSearchParams();

  const [selectedList, setSelectedList] = useState("About Movie");

  const list = ["About Movie", "Tagline", "Cast"];

  const {
    data: movieDetails,
    isLoading,
    error,
  } = useMovieDetails(id as string);

  const { data: movieCasts } = useMoviesCasts(id as string);

  if (error || id === undefined) router.push("/");

  return (
    <SafeAreaView className="flex-1 bg-dark">
      <Header title="Detail" itemMovie={movieDetails} />
      <ScrollView className="flex-1 bg-dark">
        {isLoading ? (
          <Text className="text-white text-center mt-5">Loading...</Text>
        ) : (
          <View className="flex flex-col relative">
            <View className="w-full h-52 relative">
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movieDetails?.backdrop_path}`,
                }}
                className="w-full h-full absolute top-0 left-0"
              />
              <View className="flex flex-row items-center gap-1 absolute bottom-5 right-5 w-max px-2 py-2 rounded-xl bg-[#252836]">
                <Image
                  source={images.star}
                  className="w-4 h-4"
                  resizeMode="contain"
                />
                <Text className="text-orange-400">
                  {movieDetails?.vote_average.toFixed(1)}
                </Text>
              </View>
            </View>
            <View className="flex flex-row gap-5 mx-8">
              <View className="absolute top-[-60px] left-5">
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`,
                  }}
                  className="w-[95px] h-[120px] rounded-lg"
                />
              </View>
              <View className="flex flex-col mt-4 ml-[130px]">
                <Text className="text-white text-xl font-poppins-semibold min-h-12">
                  {movieDetails?.title}
                </Text>
              </View>
            </View>
            <View className="flex flex-row items-center gap-5 mt-4 ml-24 mr-4">
              <View className="flex flex-row items-center gap-1">
                <Image
                  source={images.calendar}
                  className="w-4 h-4"
                  resizeMode="contain"
                />
                <Text className="text-secondary text-base">
                  {movieDetails?.release_date}
                </Text>
              </View>
              <View className="flex flex-row items-center gap-1">
                <Image
                  source={images.clock}
                  className="w-4 h-4"
                  resizeMode="contain"
                />
                <Text className="text-secondary text-base">
                  {movieDetails?.runtime} min
                </Text>
              </View>
            </View>
            <View className="flex flex-col mt-5 mx-14">
              <View className="flex flex-row items-center gap-6">
                {list.map((item) => (
                  <Pressable key={item} onPress={() => setSelectedList(item)}>
                    <Text
                      className={cn(
                        " text-lg",
                        selectedList === item ? "text-primary" : "text-white"
                      )}
                    >
                      {item}
                    </Text>
                  </Pressable>
                ))}
              </View>
              <View>
                {selectedList === "About Movie" && (
                  <Text className="text-white text-lg mt-4">
                    {movieDetails?.overview}
                  </Text>
                )}
                {selectedList === "Tagline" && (
                  <Text className="text-white text-lg mt-4">
                    {movieDetails?.tagline || "No tagline available."}
                  </Text>
                )}
                {selectedList === "Cast" && (
                  <View className="flex flex-row items-center justify-between gap-3 flex-wrap">
                    {movieCasts?.cast.length > 0 ? (
                      movieCasts.cast.map((cast: any) => (
                        <View
                          key={cast.id}
                          className="flex flex-col w-32 items-center gap-3 mb-3 mt-5"
                        >
                          {cast.profile_path ? (
                            <Image
                              source={{
                                uri: `https://image.tmdb.org/t/p/w500${cast.profile_path}`,
                              }}
                              className="w-28 h-28 rounded-full"
                            />
                          ) : (
                            <View className="w-28 h-28 rounded-full bg-gray-700 items-center justify-center">
                              <Text className="text-white text-sm">
                                No Image
                              </Text>
                            </View>
                          )}
                          <Text className="text-white text-xl text-center">
                            {cast.name}
                          </Text>
                        </View>
                      ))
                    ) : (
                      <Text className="text-white text-lg mt-4">
                        No cast information available.
                      </Text>
                    )}
                  </View>
                )}
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetails;
