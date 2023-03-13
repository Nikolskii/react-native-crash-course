import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import FullPostScreen from './FullPostScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Новости' }}
        />
        <Stack.Screen
          name="FullPost"
          component={FullPostScreen}
          options={{ title: 'Статья' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
