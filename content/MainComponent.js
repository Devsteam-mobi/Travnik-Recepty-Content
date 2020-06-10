import React, { useContext } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { stackComponent } from '../src/functions/stackComponent';
import { NavigationContainer } from '@react-navigation/native';

import { MyTheme } from '../src/Components/styles';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../src/Redux/reducers';

import MyStatusBar from '../src/Components/MyStatusBar';
import Loading from '../src/Components/Loading';

import CustomDrawerContent from '../src/Components/CustomDrawerContent';

import { createDrawerNavigator } from '@react-navigation/drawer';

import All from './Pages/All';
import Fito from './Pages/Fito';
import Narod from './Pages/Narod';
import Popular from './Pages/Popular';
import QandA from './Pages/QandA';

import { LocalizationContext } from '../src/localizationContext';

const Drawer = createDrawerNavigator();
const MainComponent = () => {
	const { translations } = useContext(LocalizationContext);

	return (
		<SafeAreaView
			style={{ flex: 1, backgroundColor: '#2196f3', color: 'white' }}>
			{/* <MyStatusBar /> */}
			<StatusBar barStyle="light-content" backgroundColor="#2196f3" />
			<PersistGate loading={<Loading />} persistor={persistor}>
				<NavigationContainer theme={MyTheme}>
					<Drawer.Navigator
						initialRouteName={translations.all}
						drawerContent={props => (
							<CustomDrawerContent {...props} />
						)}>
						<Drawer.Screen
							name={translations.all}
							component={stackComponent(All)}
						/>
						<Drawer.Screen
							name={translations.fito}
							component={stackComponent(Fito)}
						/>
						<Drawer.Screen
							name={translations.narod}
							component={stackComponent(Narod)}
						/>
						<Drawer.Screen
							name={translations.q_and_a}
							component={stackComponent(QandA)}
						/>
						<Drawer.Screen
							name={translations.popular}
							component={stackComponent(Popular)}
						/>
					</Drawer.Navigator>
				</NavigationContainer>
			</PersistGate>
		</SafeAreaView>
	);
};
export default MainComponent;
