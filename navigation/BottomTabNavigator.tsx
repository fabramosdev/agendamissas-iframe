import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Agendamento from '../screens/Agendamento'
import { BottomTabParamList, AgendamentoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {


  return (
    <BottomTab.Navigator
      initialRouteName="Agendamento"
      tabBarOptions={{
        activeTintColor: '#484129',
        inactiveTintColor: '#D2CDC5',
        style: {
          backgroundColor: '#A49988'
        }
      }}>
      <BottomTab.Screen
        name="Agendamento"
        component={AgendamentoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="church" color={color} />,
        }}
      />

    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const AgendamentoStack = createStackNavigator<AgendamentoParamList>();

function AgendamentoNavigator() {
  return (
    <AgendamentoStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#A49988',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          color: '#484129',
          alignSelf: 'center'
        },
      }}
    >
      <AgendamentoStack.Screen
        name="AgendamentoScreen"
        component={Agendamento}
        options={{ headerTitle: 'ArqRio - Agendamento de Missas Online' }}
      />
    </AgendamentoStack.Navigator>
  );
}
