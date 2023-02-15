import { useNavigate, Navigate } from "react-router-dom";
import ListaPersonajes from "../components/organism/ListaPersonajes";

function RickAndMorty({isLoged}) {
    return (
        isLoged ? (<ListaPersonajes/>) : (<Navigate to="/login"/>) 
        );
        
}

export default RickAndMorty;