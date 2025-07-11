import HeaderSearch from "@/components/HeaderSearch";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-dark">
      <View className="flex flex-col gap-5 mt-3 mx-7">
        <Text className="text-xl text-white font-poppins-semibold">
          What do you want to watch?
        </Text>
        <HeaderSearch />
      </View>
    </SafeAreaView>
  );
}
