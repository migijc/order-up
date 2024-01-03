import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { appDataContext } from '../contexts/appDataContext'
let appData = appDataContext;

export default function NavContainer(props) {

    const { CurrentStackNavigator, currentUserId } = props;
    console.log(currentUserId)

    return (
        <NavigationContainer>
            <View style={{ flex: 1 }}>
                <CurrentStackNavigator />
                <StatusBar />
            </View>
        </NavigationContainer>
    )
}