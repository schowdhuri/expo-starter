import { VStack, Text } from "native-base";
import { AppBar } from "@molecules/AppBar";
import { BaseLayout } from "@templates/BaseLayout";

export function Home() {
  return (
    <BaseLayout
      HeaderComponent={<AppBar variant="title" title="Expo Starter" />}
      ContentComponent={
        <VStack>
          <Text>Home</Text>
        </VStack>
      }
    />
  );
}
