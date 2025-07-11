import { images } from "@/constants";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";

interface TabBarIconProps {
  name: string;
  focused: boolean;
  icon: any;
}

const TabBarIcon = ({ name, focused, icon }: TabBarIconProps) => {
  if (focused) {
    return (
      <View className="flex flex-col gap-1 min-w-28 min-h-full items-center justify-center mt-12">
        <Image
          source={icon}
          tintColor={focused ? "#0296E5" : "#67686D"}
          className="w-6 h-6"
          resizeMode="contain"
        />
        <Text className="text-primary text-sm font-poppins-medium">{name}</Text>
      </View>
    );
  }
  return (
    <View className="flex flex-col min-w-28 min-h-full items-center justify-center mt-6">
      <Image
        source={icon}
        tintColor={focused ? "#0296E5" : "#67686D"}
        className="w-6 h-6"
        resizeMode="contain"
      />
    </View>
  );
};

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          marginHorizontal: 0,
          height: 80,
          position: "absolute",
          bottom: 20,
          backgroundColor: "#242A32",
          elevation: 5,
          borderTopColor: "#0296E5",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="Home" icon={images.HomeBar} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="Search"
              icon={images.SearchBar}
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="watch-list"
        options={{
          tabBarLabel: "Watch List",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              name="Watch List"
              icon={images.watchListBar}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}
