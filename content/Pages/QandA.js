import React from 'react';
import { View } from 'react-native';

import ContentList from '../../src/Components/ContentList';
import SearchList from '../../src/Components/SearchList';

import { styles } from '../../src/Components/styles';

const QandA = ({ navigation }) => {
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.toolbarAbsolutePosition}>
				<SearchList filter="q_and_a" navigation={navigation} />
			</View>
			<View style={styles.contentListAbsolutePosition}>
				<ContentList filter="q_and_a" navigation={navigation} />
			</View>
		</View>
	);
};

export default QandA;
