import { Tabs } from 'expo-router';
import { TabBarIcon } from 'components/TabBarIcon';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 2,
        },
      }
      
      }>
      <Tabs.Screen
        name="index"
        options={{
          title: 'home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'explore',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chatbot"
        options={{
          title: 'chatbot',
          tabBarIcon: ({ color }) => <Entypo name="chat" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="appointment"
        options={{
          title: 'appointment',
          tabBarIcon: ({ color }) => <FontAwesome5 name="calendar-check" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
