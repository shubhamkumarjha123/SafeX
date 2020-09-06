import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './screens/Home';
import Details from './screens/Details';
import Review from './screens/Review';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="review" component={Review} />
    </Stack.Navigator>
  );
};

export default App;
