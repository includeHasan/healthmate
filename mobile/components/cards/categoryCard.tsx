import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Image  } from 'expo-image';

interface CategoryCardProps {
  icon: any; // Change to accept image source
  title: string;
  onPress?: () => void;
}

export const CategoryCard = ({ icon, title, onPress }: CategoryCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} className="bg-white rounded-lg shadow-md p-4 m-2">
      <View className="flex-row items-center">
        <Image source={icon} style={{ width: 24, height: 24,marginRight: 10 }} />
        <Text className="text-lg font-semibold text-gray-800">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
