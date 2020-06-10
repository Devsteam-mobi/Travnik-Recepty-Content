import React, { useEffect, useContext } from 'react';
import { SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import { store } from '../src/Redux/reducers';
import { changeCurrentLang } from '../src/Redux/actions';

import { rateWindow } from '../src/functions/rateWindow';

import { getData } from '../src/functions/getData';
import MainComponent from './MainComponent';

import {
	LocalizationProvider,
	LocalizationContext,
} from '../src/localizationContext';

const App = () => {
	const { translations } = useContext(LocalizationContext);
	useEffect(() => {
		getData(store, '');
		let today = new Date();
		let dd = String(today.getDate()).padStart(2, '0');
		let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		setTimeout(() => {
			rateWindow(dd, mm, store, translations);
		}, 2000);
		return () => {};
	}, []);

	return (
		<Provider store={store}>
			<LocalizationProvider>
				<MainComponent />
			</LocalizationProvider>
		</Provider>
	);
};

export default App;
