
import { Link } from 'react-router-dom'
import pantfound from '../assets/img/notfound.png'

const NotFound = ()=> {
    return (
        <div className="notfound">
           <h2>Ooops! </h2>
           <p>Algo salio mal, la pagina que buscas no existe.</p>
           <img src={pantfound} alt="" />
            <span>404!</span>
            <Link to="/"><button>Volver al home</button></Link>
            
            
           
        </div>
    )
}

export default NotFound