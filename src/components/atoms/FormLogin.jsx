import { Link } from 'react-router-dom';
import Logo from '../../assets/react.svg'
function FormLogin() {
    return (
        <form>
            <img src={Logo} alt="Logotipo de la empresa" />
            <input type="text" />
            <input type="password" />
            <button>Iniciar sesión</button>
            <Link to="/register">Registrate</Link>
        </form>
      );
}
export default FormLogin;