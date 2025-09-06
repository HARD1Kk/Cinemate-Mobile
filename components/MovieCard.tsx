import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useFavorites } from "../contexts/FavoritesContext";
import { Movie } from "@/interfaces/interfaces";

const MovieCard = (movie: Movie) => {
  const { id, title, release_date, poster_path, vote_average } = movie;
  const { favorites, addToFavorites, removeFromFavorites } = useFavorites();

  const isFavorited = favorites.find((fav) => fav.id === id);

  const handleFavorite = () => {
    if (isFavorited) {
      removeFromFavorites(id);
    } else {
      addToFavorites(movie);
    }
  };

  return (
    <View className="w-[30%]">
      <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity>
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://via.placeholder.com/600*400/1a1a1a/ffffff.png`,
            }}
            className="w-full h-52 rounded-lg"
            resizeMode="cover"
          />
        </TouchableOpacity>
      </Link>
      <View className="flex-row items-center justify-between mt-2">
        <Text className="text-sm font-bold text-white" numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center justify-start gap-x-1">
          <Image source={icons.star} className="size-4" />
          <Text className="text-xs font-bold text-white uppercase">
            {Math.round(vote_average / 2)}
          </Text>
        </View>
        <TouchableOpacity onPress={handleFavorite}>
          <Image
            source={icons.save}
            className="size-6"
            
            tintColor={isFavorited ? "#FFD700" : "#FFFFFF"}
          />
        </TouchableOpacity>
      </View>
      <View className="gap-1 flex-row align-items justify-between">
        <Text className="text-light-300 text-xs font-medium mt-1">
          {release_date?.split("-")[0]}
        </Text>
      </View>
    </View>
  );
};

export default MovieCard;
