import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Text, TouchableOpacity } from 'react-native';
import { auth } from "../../Firebase/config";
import Categories from "../../Screens/Categories";
import Details from "../../Screens/Details";
import Products from "../../Screens/Products";
import { signOut } from 'firebase/auth';

const ShopStack = () => {

    const Stack = createNativeStackNavigator();

    const handleSignOut = () => {
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      }

    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerRight:
                (props) => 
                <TouchableOpacity onPress={handleSignOut}>
                    <Text>Cerrar sesión</Text>
                </TouchableOpacity>
            }
            }
        >
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{ title: "Categorias" }}
            />
            <Stack.Screen
                name="Products"
                component={Products}
                options={({ route }) => ({ name: route.params.category.name })} />
            <Stack.Screen
                name="Details"
                component={Details}
                options={({ route }) => ({ name: route.params.name })} />
        </Stack.Navigator>
    )
}

export default ShopStack;