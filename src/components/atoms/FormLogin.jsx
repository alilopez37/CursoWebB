import {useState} from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/react.svg'
function FormLogin() {
    //const [description, setDescription] = useState({msn: "CC", v : 1})
    //const [username, setUsername] = useState('')
    const [stateForm, setStateForm] = useState({username:'', password:''})
    const handlerClick = (e) => {
        e.preventDefault()
        setDescription({msn: username})    
    }
    const handlerChange = (e) => {
        setStateForm({...stateForm,username:e.target.value})
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
{            <div>
                <label>{JSON.stringify(stateForm)}</label>
            </div>}
        </form>
      );
}
export default FormLogin;