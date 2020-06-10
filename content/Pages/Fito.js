import React from 'react';
import { View } from 'react-native';

import ContentList from '../../src/Components/ContentList';
import SearchList from '../../src/Components/SearchList';

import { styles } from '../../src/Components/styles';

const Fito = ({ navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.toolbarAbsolutePosition}>
				<SearchList filter="fito" navigation={navigation} />
			</View>
			<View style={styles.contentListAbsolutePosition}>
				<ContentList filter="fito" navigation={navigation} />
			</View>
		</View>
	);
};

export default Fito;
