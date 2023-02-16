import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserContext from '../context/UserContext'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import FlexBox from '../components/molecules/FlexBox';
import RickAndMorty from '../pages/RickAndMorty';
import ProtectedParentRoute from './ProtectedParentRoute';


function App() {
    const [isLoged, setIsLoged] = useState(false)
    return (
        <BrowserRouter>
            <UserContext.Provider value={{isLoged, setIsLoged}}>
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route element={<ProtectedParentRoute isLoged={isLoged}/>}>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/flexbox' element={<FlexBox/>}/>
                        <Route path='/rickandmorty' element={<RickAndMorty/>}
                        />
                    </Route>
                   
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
      );
}

export default App;