import { Tabs } from "expo-router";

// will need to customize later to the three tab layout
// note: the starred and filters pages correspond to layouts that aren't actual screens
export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{title:'home'}}></Tabs.Screen>
            <Tabs.Screen name="testpage" options={{title:'foobar'}}></Tabs.Screen>
        </Tabs>
    );
}