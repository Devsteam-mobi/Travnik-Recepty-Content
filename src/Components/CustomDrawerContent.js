import React, { useContext, useEffect } from 'react';

import { Share, Text, View, TouchableOpacity, Button } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Dimensions } from 'react-native';

import {
	getBuildNumber,
	getVersion,
	getBundleId,
} from 'react-native-device-info';

import {
	DrawerContentScrollView,
	DrawerItemList,
} from '@react-navigation/drawer';

import Rate, { AndroidMarket } from 'react-native-rate';

import { LocalizationContext } from '../localizationContext';

let deviceH = Dimensions.get('window').height;

const onShare = async () => {
	try {
		const result = await Share.share({
			message: /* Platform.OS == 'ios' ?  : */ `There was link`,
		});

		if (result.action === Share.sharedAction) {
			if (result.activityType) {
				// shared with activity type of result.activityType
			} else {
				// shared
			}
		} else if (result.action === Share.dismissedAction) {
			// dismissed
		}
	} catch (error) {
		alert(error.message);
	}
};

const CustomDrawerContent = props => {
	const {
		translations,
		setAppLanguage,
		appLanguage,
		initializeAppLanguage,
	} = useContext(LocalizationContext);

	useEffect(() => {
		initializeAppLanguage();
	}, [appLanguage]);

	console.log('app ', appLanguage);

	const toggleSwitch = () => {
		let newLanguage = appLanguage == 'en' ? 'ru' : 'en';
		setAppLanguage(newLanguage);
	};

	return (
		<DrawerContentScrollView {...props}>
			<View
				style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'space-around',
					height: deviceH,
				}}>
				<View>
					<DrawerItemList {...props} />
				</View>

				<View>
					<View
						style={{
							alignSelf: 'center',
							flexDirection: 'row',
							paddingBottom: 25,
						}}>
						<Button
							title={translations.translate}
							onPress={() => toggleSwitch()}
						/>
					</View>
					<TouchableOpacity
						onPress={() => {
							console.log('There was link');
							// const options = {

							// 	// preferredAndroidMarket: AndroidMarket.Google,
							// 	// preferInApp: false,
							// 	// openAppStoreIfInAppFails: true,
							// 	// fallbackPlatformURL:"",
							// };
							// Rate.rate(options, success => {
							// 	if (success) {
							// 		// this technically only tells us if the user successfully went to the Review Page. Whether they actually did anything, we do not know.
							// 		console.log(success);
							// 	}
							// });
						}}>
						<Text
							style={{
								alignSelf: 'center',
								color: 'white',
								fontSize: 16,
								marginBottom: 5,
							}}>
							{translations.rate_app}
						</Text>
						<View
							style={{
								flexDirection: 'row',
								justifyContent: 'space-around',
								marginBottom: 10,
							}}>
							<Icon
								name="star"
								size={25}
								backgroundColor="rgba(0,0,0,0)"
								color="white"
							/>
							<Icon
								name="star"
								size={25}
								backgroundColor="rgba(0,0,0,0)"
								color="white"
							/>
							<Icon
								name="star"
								size={25}
								backgroundColor="rgba(0,0,0,0)"
								color="white"
							/>
							<Icon
								name="star"
								size={25}
								backgroundColor="rgba(0,0,0,0)"
								color="white"
							/>
							<Icon
								name="star"
								size={25}
								backgroundColor="rgba(0,0,0,0)"
								color="white"
							/>
						</View>
					</TouchableOpacity>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<View>
							<Text style={{ color: 'white', marginLeft: 15 }}>
								ver: {getVersion()}
							</Text>
							<Text style={{ color: 'white', marginLeft: 15 }}>
								build: {getBuildNumber()}
							</Text>
						</View>
						<View style={{ marginRight: 15 }}>
							<Icon.Button
								name="share"
								size={30}
								backgroundColor="#72C0FC"
								color="white"
								onPress={() => onShare()}>
								{translations.share}
							</Icon.Button>
						</View>
					</View>
				</View>
			</View>
		</DrawerContentScrollView>
	);
};

export default CustomDrawerContent;
