import { StyleSheet, Text, View } from 'react-native';
import NavContainer from './components/NavContainer';
import StackNav from './components/StackNav';
import UserAuthenticatedStack from './components/UserAuthenticatedStack';
import { useEffect, useState } from 'react';
import { User } from './classes/User';
const Miguel_Gil = (979797585)

export default function App() {
  const [currentUserId, setCurrentUserId] = useState(Miguel_Gil);
  
  if(currentUserId){
    return (
      <NavContainer CurrentStackNavigator={UserAuthenticatedStack} currentUserId={currentUserId} />
    );
  }
  else{
    return null
  }
 
}





const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

