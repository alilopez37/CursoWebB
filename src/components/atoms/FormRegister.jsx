import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'
import '../../assets/styles/FormRegister.css'
function FormRegister() {
    const navigate = useNavigate()
/*     const name = useRef()
    const username = useRef()
    const password = useRef() */
    const form = useRef()

    const handlerClick = (e)=> {
        e.preventDefault();
        // console.log(typeof(name) )
        // alert('Nombre: ' + name.current.value)
        //navigate("/")
        // Instrucciones para el elemento form
        const newForm = new FormData(form.current)
        alert('Nombre; '+ newForm.get('name'))
    }
    return ( 
        <form ref={form}>
            <div>
                <label className="caption" htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name"/>
            </div>
            <div>
                <label className="caption">Usuario
                    <input type="text" />
                </label>
            </div>
            <div>
                <label className="caption">Contraseña</label>
                <input type="password" />
            </div>
            <button onClick={handlerClick}>Registro</button>
        </form>
     );
}

export default FormRegister;