import { images } from "@/constants";
import { useWatchlistStore } from "@/store/watchlistStore";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  title: string;
  itemMovie: any;
}

const Header = ({ title, itemMovie }: HeaderProps) => {
  const router = useRouter();

  const addMovie = useWatchlistStore((state) => state.addMovie);

  return (
    <View className="flex flex-row items-center justify-between py-5 px-5">
      <TouchableOpacity onPress={() => router.back()}>
        <Image
          source={images.arrowLeft}
          className="w-5 h-5"
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text className="text-white text-xl font-poppins-semibold">{title}</Text>
      <TouchableOpacity onPress={() => addMovie(itemMovie)}>
        <Image
          source={images.watchList}
          className="w-5 h-5"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
