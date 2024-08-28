import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Drawer } from 'expo-router/drawer';

import { HeaderButton } from 'components/HeaderButton';

const DrawerLayout = () => (
  <Drawer
  initialRouteName="(tabs)"
  >
  
    <Drawer.Screen
      name="(tabs)"
      options={{
        headerTitle: 'Health Mate',
        drawerLabel: 'Home',
        drawerIcon: ({ size, color }) => (
          <MaterialIcons name="border-bottom" size={size} color={color} />
        ),
        headerRight: () => (
          <Link href="/modal" asChild
          style={{marginRight: 10}}
          >
            
            <Ionicons name="notifications-outline" size={24} color="black" />
          </Link>
        ),
      }}
    />

<Drawer.Screen
      name="profile"
      options={{
        headerTitle: 'profile',
        drawerLabel: 'profile',
        drawerIcon: ({ size, color }) => <Ionicons name="person-outline" size={size} color={color} />,

      }}
    />
  </Drawer>
);

export default DrawerLayout;
