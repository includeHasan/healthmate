import { Link, Stack } from 'expo-router';
import { Image } from 'expo-image';

  import { Text,SafeAreaView } from 'react-native';

  import { Container } from 'components/Container';


export default function NotFoundScreen() {


  return (
      
        <>
          <Stack.Screen options={{ title: "Oops!" }} />
          <SafeAreaView style={{flex:1}}>
          <Container>
            <Text className={styles.title}>This screen doesn't exist.</Text>
            <Link href="/" className={styles.link}>
            <Image source={require('../assets/own/not_found.png')} style={{ width: 200, height: 200 }} />
              <Text className={styles.linkText}>Go to home screen!</Text>
            </Link>
          </Container>
          </SafeAreaView>
          </>
      
  );
}


  const styles = {
    title: `text-xl font-bold`,
    link: `mt-4 pt-4`,
    linkText: `text-base text-[#2e78b7]`,
	};
