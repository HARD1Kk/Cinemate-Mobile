import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchPopularMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useEffect, useState } from "react";

import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    refetch: loadSearchedMovies,
    reset,
  } = useFetch(
    () =>
      fetchPopularMovies({
        query: searchQuery,
      }),
    false
  );

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (searchQuery.trim()) {
        await loadSearchedMovies();
      } else {
        reset();
      }
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 w-full absolute z-0"
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
              <Image source={icons.logo} className="w-20 h-14 mx-auto mb-5" />
            </View>
            <View className="my-5 mt-3 ">
              <SearchBar
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
                placeholder="Search movies... "
              />
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
              searchQuery.trim() &&
              movies?.length > 0 && (
                <Text className="text-xl  text-white font-bold">
                  Search Results for{" "}
                  <Text className="text-accent"> {searchQuery} </Text>
                </Text>
              )}
          </>
        }
        ListEmptyComponent={
         !moviesLoading && !moviesError ? (
          <View className="mt-10 px-5 ">

            <Text className="text-center text-gray-500">
              {searchQuery.trim() ? 'No movie Found' : 'Search for a movie'}
            </Text>

            </View>
         ): null
        }
      />
    </View>
  );
};

export default Search;
