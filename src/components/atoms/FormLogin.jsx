import {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import Logo from '../../assets/react.svg'

function FormLogin() {
    //const [description, setDescription] = useState({msn: "CC", v : 1})
    //const [username, setUsername] = useState('')
    const [stateForm, setStateForm] = useState({username:'Samuel', password:''})
    const {isLoged, setIsLoged} = useContext(UserContext)
    const handlerClick = (e) => {
        e.preventDefault()
        //setDescription({msn: username})    
        setIsLoged(true)
    }
    const handlerChange = (e) => {
        console.log(stateForm.username)
        setStateForm({...stateForm,username:"Manuel"})
        console.log(stateForm.username)
    }
    const handlerChangePassword = (e) => {
        setStateForm({...stateForm,password: e.target.value})
    }
    return (
        <form>
            <img src={Logo} alt="Logotipo de la empresa" />
            <input type="text" value={stateForm.username} onChange={handlerChange}/>
            <input type="password" value ={stateForm.password} onChange={handlerChangePassword}/>
            <button onClick={handlerClick}>Iniciar sesión</button>
            <Link to="/register">Registrate</Link>
            <div>
                <Link to="/rickandmorty">Rick and Morty</Link>
            </div>
{            <div>
                <label>{JSON.stringify(stateForm)}</label>
            </div>}
        </form>
      );
}
export default FormLogin;