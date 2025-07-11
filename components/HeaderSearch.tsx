import { images } from "@/constants";
import React from "react";
import { Image, TextInput, View } from "react-native";

const HeaderSearch = () => {
  return (
    <View className="flex-between flex-row bg-[#3A3F47] rounded-2xl relative">
      <TextInput
        placeholder="Search"
        placeholderTextColor="#67686D"
        placeholderClassName="text-sm text-secondary font-poppins-regular"
        className="text-white font-poppins-regular text-base flex-1 w-full h-full px-6 py-3"
      />
      <Image
        source={images.search}
        className="w-4 h-4 absolute right-6 top-1/2 transform -translate-y-1/2"
        resizeMode="contain"
        alt="Search Icon"
      />
    </View>
  );
};

export default HeaderSearch;
