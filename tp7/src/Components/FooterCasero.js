import Estilos from "../Estilo/Estilos.css"
import logo_byn from '../Components/logo_byn.png';
import local from '../Components/local.png';
import sobre from '../Components/sobre.png';
import tel from '../Components/tel.png';
import Image from 'react-bootstrap/Image'

function FooterCasero() {
  return (
    <footer id="footer" class="navbar bg-dark">
    <div class="container">
            <div >
              <Image src={logo_byn} class="imgfooter"/>
            </div>
            <div id="centrofooter">
              <Image src={local} width="25" class="foot"/>
                Beiro 3300 - Villa del Parque
              <br></br>
                <Image src={sobre}  width="25" class="foot"/>
                contacto@sanitarioscampana.com.ar
              </div>
            <div class="celular">
                    <Image src={tel} width="30"/>
                   4503-6015
               
            </div>
        </div>
    
  
</footer>

  );
}
export default FooterCasero;