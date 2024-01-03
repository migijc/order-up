import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()
export default function StackNav({screensData}){
    let formattedData = objectToArray(screensData)
    console.log(formattedData)
    return (
        <Stack.Navigator>
            {formattedData.map((item, i)=> <Stack.Screen key={i} name={item.name} component={item.component} />)}
        </Stack.Navigator>
    )
}

function objectToArray(obj){
    let keys = Object.keys(obj)
    keys = keys.map(item => obj[item])
    console.log(keys)
    return keys

}



