import { images } from "@/constants";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View,
} from "react-native";

const HeaderSearch = () => {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!searchText.trim()) return;
    router.push(`/search?q=${encodeURIComponent(searchText.trim())}`);
    setSearchText("");
  };
  return (
    <KeyboardAvoidingView
      className="w-full h-12"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="flex-between flex-row bg-[#3A3F47] rounded-2xl relative">
        <TextInput
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSubmit}
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
    </KeyboardAvoidingView>
  );
};

export default HeaderSearch;
