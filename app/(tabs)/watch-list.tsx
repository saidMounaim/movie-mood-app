import { images } from "@/constants";
import { useWatchlistStore } from "@/store/watchlistStore";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const WatchList = () => {
  const { movies } = useWatchlistStore();
  return (
    <SafeAreaView className="flex-1 bg-dark">
      <View className="flex flex-row items-center justify-between py-5 px-5">
        <TouchableOpacity onPress={() => router.back()}>
          <Image
            source={images.arrowLeft}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text className="text-white text-xl font-poppins-semibold text-center">
          Watch list
        </Text>
        <View></View>
      </View>
      {movies.length === 0 && (
        <View className="flex flex-col items-center justify-center flex-1">
          <Image
            source={images.noWatchList}
            className="w-20 h-20 mb-3"
            resizeMode="contain"
          />
          <Text className="text-white text-xl pb-1">
            There is no movie yet!
          </Text>
          <Text className="text-gray-400 text-sm w-52 mx-auto text-center">
            Find your movie by Type title, categories, years, etc{" "}
          </Text>
        </View>
      )}
      {movies.length > 0 && (
        <FlatList
          data={movies}
          contentContainerClassName="flex flex-col mx-5 mt-5"
          columnWrapperClassName="flex flex-row mb-5 "
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
    </SafeAreaView>
  );
};

export default WatchList;
