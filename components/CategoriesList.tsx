import { categories } from "@/constants";
import cn from "clsx";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

interface CategoriesListProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoriesList = ({
  selectedCategory,
  setSelectedCategory,
}: CategoriesListProps) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View className="flex flex-row gap-5">
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              className={cn(
                "text-xl font-semibold pb-5",
                selectedCategory === category ? "text-primary" : "text-white"
              )}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default CategoriesList;
