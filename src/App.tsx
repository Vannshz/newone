import React from 'react';
import './App.css';
import LoginButton from './login';
import {useAuth0} from '@auth0/auth0-react';
import RoutePath from './router';


function App() {
  const { isLoading,isAuthenticated} = useAuth0();
  if(isLoading 
  ){
    return <div>Loading...</div>
  }
  return (
   <>

    
     {(!isAuthenticated)? <LoginButton />: null}
        
        
        
        {isAuthenticated &&
         <RoutePath />
    }

    </>
  );
}

export default App;