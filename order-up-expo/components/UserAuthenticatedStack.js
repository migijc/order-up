import Home from "../Screens/Home";
import StackNav from "./StackNav";

export default function UserAuthenticatedStack(){
    return <StackNav screensData={screensData}/>
}

const screensData={
    0:{
      name:'home',
      component: Home,
    }
  }
  
