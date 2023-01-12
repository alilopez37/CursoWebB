import {useNavigate} from 'react-router-dom'
import '../../assets/styles/FormRegister.css'
function FormRegister() {
    const navigate = useNavigate()
    const handlerClick = (e)=> {
        e.preventDefault();
        navigate("/")
    }
    return ( 
        <form>
            <label className="caption" htmlFor="name">Nombre</label>
            <input type="text" id="name"/>

            <label className="caption">Usuario
                <input type="text" />
            </label>

            <label className="caption">Contraseña</label>
            <input type="password" />
            <button onClick={handlerClick}>Registro</button>
        </form>
     );
}

export default FormRegister;