import MovieCard from "@/components/MovieCard";
import { images } from "@/constants/images";
import { useFavorites } from "../../contexts/FavoritesContext";
import React from "react";

import { FlatList, Image, Text, View } from "react-native";

const Saved = () => {
  const { favorites } = useFavorites();

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 w-full absolute z-0"
        resizeMode="cover"
      />
      <FlatList
        data={favorites}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id?.toString()}
        className="px-5 mt-2 pb-32"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-between mt-20 items-center">
              <Text className="text-2xl text-white font-bold">Saved Movies</Text>
            </View>
          </>
        }
        ListEmptyComponent={
          <View className="mt-10 px-5 ">
            <Text className="text-center text-gray-500">No saved movies</Text>
          </View>
        }
      />
    </View>
  );
};

export default Saved;
