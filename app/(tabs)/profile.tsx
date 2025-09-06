import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useAuth } from "../../contexts/AuthContext";
import React from "react";
import { Alert, FlatList, Image, Text, TouchableOpacity, View } from "react-native";

const profile = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: logout,
        style: "destructive",
      },
    ]);
  };

  const settings = [
    { id: "1", name: "Edit Profile", icon: icons.person, onPress: () => {} },
    { id: "2", name: "Privacy Policy", icon: icons.search, onPress: () => {} },
    { id: "3", name: "Terms of Service", icon: icons.search, onPress: () => {} },
    { id: "4", name: "Logout", icon: icons.person, onPress: handleLogout },
  ];

  return (
    <View className="flex-1 bg-primary items-center">
      <Image
        source={images.bg}
        className="absolute w-full z-0 flex-1"
        resizeMode="cover"
      />
      <View className="w-full flex-row justify-center mt-20 items-center">
        <Image source={icons.logo} className="w-14 h-10 mx-auto mb-5" />
      </View>
      <View className="items-center mt-10">
        <Image
          source={{ uri: user?.avatar }}
          className="w-24 h-24 rounded-full"
          resizeMode="cover"
        />
        <Text className="text-white text-2xl font-bold mt-5">{user?.name}</Text>
      </View>
      <FlatList
        data={settings}
        keyExtractor={(item) => item.id}
        className="w-full mt-10 px-5"
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={item.onPress}
            className="flex-row items-center justify-between p-5 border-b border-gray-700"
          >
            <View className="flex-row items-center">
              <Image source={item.icon} className="w-6 h-6 mr-5" />
              <Text className="text-white text-lg">{item.name}</Text>
            </View>
            <Image source={icons.arrow} className="w-6 h-6" />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default profile;
