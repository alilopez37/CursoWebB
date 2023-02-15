import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import UserContext from '../context/UserContext'
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import FlexBox from '../components/molecules/FlexBox';
import RickAndMorty from '../pages/RickAndMorty';

function App() {
    const [isLoged, setIsLoged] = useState(false)
    return (
        <BrowserRouter>
            <UserContext.Provider value={{isLoged, setIsLoged}}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/flexbox' element={<FlexBox/>}/>
                    <Route path='/rickandmorty' 
                        element={<RickAndMorty isLoged={isLoged}/>}
                    />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
      );
}

export default App;