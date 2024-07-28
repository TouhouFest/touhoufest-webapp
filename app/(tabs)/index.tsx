import { Text, View } from "tamagui";
import { Link } from "expo-router";
import { Pressable } from "react-native";
import { ListItem } from "tamagui";
import { YStack } from "tamagui";

export default function Index() {
  return (
    <YStack
      padding="$2"
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <ListItem>test</ListItem>
      <ListItem>test2</ListItem>
      <ListItem>test3</ListItem>
    </YStack>
  );
}
