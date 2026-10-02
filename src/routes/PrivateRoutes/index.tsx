import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../../screens/Home";
import { BottomSheetProvider } from "../../context/bottomsheet.context";

export type PrivateStackParamsList = {
    Home: undefined;
}

export const PrivateRoutes = () => {
    const PrivateStack = createStackNavigator<PrivateStackParamsList>();

    return (
        <BottomSheetProvider>
            <PrivateStack.Navigator screenOptions={{ headerShown: false }}>
                <PrivateStack.Screen name="Home" component={Home} />
            </PrivateStack.Navigator>
        </BottomSheetProvider>
    )
}