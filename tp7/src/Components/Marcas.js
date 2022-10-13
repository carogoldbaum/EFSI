import Estilos from "../Estilo/Estilos.css"
import ferrum from '../Components/ferrum.png';
import delta from '../Components/delta.png';
import Logo_Negativo from '../Components/Logo_Negativo.png';
import logo_ips from '../Components/logo_ips.png';
import Image from 'react-bootstrap/Image'

function Marcas(props) {
    console.log(props.elemento)

    return (
   
        <div class= "container-fluid" id="marcas">
            <br></br>
        <h5>Marcas con las que trabajamos</h5>
      
       
        <div class="row row-cols-auto align-items-center justify-content-between mt-3 mb-5">
            <div class = " col-sm-4">
              <Image src={ferrum}/> 
            </div>
            <div class = "col-sm-4">
                <Image src={delta}/> 
              </div>
              <div class = "col-sm-3">
                <Image src={Logo_Negativo}/> 
              </div>
              <div class = "col-sm-1">
                <Image src={logo_ips}/> 
              </div>
            </div>
        </div>



    )
}
export default Marcas;


