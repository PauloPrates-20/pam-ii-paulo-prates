import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
			<Tabs.Screen name='segunda' />
    </Tabs>
  );
}