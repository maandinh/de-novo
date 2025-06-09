import React from 'react';
import {  createDrawerNavigator, DrawerContentScrollView, DrawerItem,} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DashboardHome from '../Pages/DASHBOARD/DashboardHome';
import Cafe from '../Pages/DASHBOARD/Cafe';
import PratoPrincipal from '../Pages/DASHBOARD/PratoPrincipal';
import Salada from '../Pages/DASHBOARD/Salada';
import Lanche from '../Pages/DASHBOARD/Lanche';
import Perfil from '../Pages/PERFIL';
import EditarPerfil from '../Pages/EDICAO'; 
import Sair from '../Pages/SAIR';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();


function DashboardStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DashboardHome" component={DashboardHome} />
      <Stack.Screen name="Cafe" component={Cafe} />
      <Stack.Screen name="PratoPrincipal" component={PratoPrincipal} />
      <Stack.Screen name="Salada" component={Salada} />
      <Stack.Screen name="Lanche" component={Lanche} />
    </Stack.Navigator>
  );
}


function PerfilStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="PerfilHome" component={Perfil} />
      <Stack.Screen name="EDICAO" component={EditarPerfil} />
    </Stack.Navigator>
  );
}


function CustomDrawerContent(props) {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Principal"
        onPress={() =>
          navigation.navigate('Principal', {
            screen: 'DashboardHome',
          })
        }
      />
      <DrawerItem
        label="Perfil"
        onPress={() =>
          navigation.navigate('Perfil', {
            screen: 'PerfilHome',
          })
        }
      />
      <DrawerItem label="Sair" onPress={() => navigation.navigate('Sair')} />
    </DrawerContentScrollView>
  );
}

export default function MainNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Principal" component={DashboardStack} />
      <Drawer.Screen name="Perfil" component={PerfilStack} />
      <Drawer.Screen name="Sair" component={Sair} />
    </Drawer.Navigator>
  );
}
