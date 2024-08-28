import { Stack } from 'expo-router';
import { Link } from 'expo-router';
import { Container } from 'components/Container';
import { ScreenContent } from 'components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'home' }} />
      <Container>
        <Link href={"/login" as any}>Login</Link>
      </Container>
    </>
  );
}
