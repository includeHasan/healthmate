import React from 'react';
import { View, Text, ScrollView, useColorScheme,FlatList } from 'react-native';
import { Image } from 'expo-image';

const CardWithSkeleton = ({index}: {index: number}) => {
  return (
    <View className="bg-surface p-4 rounded-lg shadow-md max-w-sm mx-2">
      <View className="relative w-full h-48 mb-4">
        <Image
          source="https://picsum.photos/200"
          placeholder="L184i9ofbHof00ayjsay~qj[ayj@"
          contentFit="cover"
          transition={1000}
          className="rounded-lg w-full h-full"
        />
      </View>
      <Text className="text-lg font-semibold  text-textPrimary mb-2">Card Title {index}</Text>
      <Text className="text-textSecondary">This is a card with an image skeleton loader.</Text>
    </View>
  );
};

const App = () => {
  const [arr, setArr] = React.useState<number[]>([1,2,3,4,5,6,7,8,9,10]);
  return (
    <ScrollView className="bg-background min-h-screen p-8">
      <Text className="text-4xl font-bold text-primary mb-8">Color Preview</Text>
      
      <View className="space-y-6">
        <View className="bg-surface p-6 rounded-lg shadow-md">
          <Text className="text-2xl font-semibold text-textSecondary mb-4">Surface Color</Text>
          <Text className="text-textSecondary">This box demonstrates the surface color.</Text>
        </View>

        <View className="bg-primary p-4 rounded-md self-start">
          <Text className="font-medium text-surface">Primary Color Button</Text>
        </View>

        <View className="space-y-2">
          <Text className="text-textPrimary">This is primary text color.</Text>
          <Text className="text-textSecondary">This is secondary text color.</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 16 }}
          data={arr}
          renderItem={({ item, index }) => (
            <CardWithSkeleton
              index={(index % arr.length) + 1}
              key={index}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={() => {
            // Append the same array to create an "infinite" effect
            setArr(prevArr => [...prevArr, ...arr]);
          }}
          onEndReachedThreshold={0.5}
          initialNumToRender={arr.length}
          maxToRenderPerBatch={arr.length}
          windowSize={arr.length * 2}
        />
      </View>
    </ScrollView>
  );
};

export default App;