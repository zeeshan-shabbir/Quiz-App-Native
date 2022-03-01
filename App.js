import 'react-native-gesture-handler';
import React from 'react';
import ContextProvider from './src/context/context';
import Navagation from './src/navagations/navagation';
const App = () => {
 

  return (

    <ContextProvider>
      <Navagation />
    </ContextProvider>

  )
}
export default App;