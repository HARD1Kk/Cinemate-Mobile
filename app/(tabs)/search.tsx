import {
  Image,
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { images } from "@/constants/images";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import MovieCard from "@/components/MovieCard";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchPopularMovies } from "@/services/api";

const search = () => {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchPopularMovies({
      query: "",
    })
  );

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 w-full absolute" // add z-0 later
        resizeMode="cover"
      />
      <FlatList
        data={movies}
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
            <View className="w-full flex-row justify-center mt-20 items-center">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <SearchBar placeholder="Search movies... " />
            </View>

            {moviesLoading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}
            {moviesError && (
              <Text className="text-red-500 px-5 my-3">
                Error: {moviesError.message}
              </Text>
            )}
            {!moviesLoading &&
              !moviesError &&
              'SEARCH TERM'.trim() &&
              movies?.length > 0 && (
                <Text className="text-xl  text-white font-bold">
                  Search Results for{" "}
                  <Text className="text-accent"> SEARCH TERM </Text>
                </Text>
              )}
          </>
        }
      />
    </View>
  );
};

export default search;
