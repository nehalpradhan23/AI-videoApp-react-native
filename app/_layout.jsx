import { Slot, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
  // return (
  //   <>
  //     <Text>Header</Text>
  //     <Slot />
  //     <Text>Footer</Text>
  //   </>
  // );
};

export default RootLayout;
