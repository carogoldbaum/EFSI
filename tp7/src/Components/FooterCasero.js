import logo_byn from '../Components/logo_byn.png';
import local from '../Components/local.png';
import sobre from '../Components/sobre.png';
import tel from '../Components/tel.png';
import Image from 'react-bootstrap/Image'
import ferrum from '../Components/ferrum.png';
import delta from '../Components/delta.png';
import Logo_Negativo from '../Components/Logo_Negativo.png';
import logo_ips from '../Components/logo_ips.png';

function FooterCasero() {
  return (
    <>
       <div class="rectangulo"></div>
      <div class="container-fluid" id="marcas">
        <br></br>
        <h5>Marcas con las que trabajamos</h5>


        <div class="row row-cols-auto align-items-center justify-content-between mt-3 mb-5">
          <div class=" col-sm-4">
            <Image src={ferrum} />
          </div>
          <div class="col-sm-4">
            <Image src={delta} />
          </div>
          <div class="col-sm-3">
            <Image src={Logo_Negativo} />
          </div>
          <div class="col-sm-1">
            <Image src={logo_ips} />
          </div>
        </div>
      </div>

      <footer id="footer" class="navbar bg-dark">
        <div class="container">
          <div >
            <Image src={logo_byn} class="imgfooter" />
          </div>
          <div id="centrofooter">
            <Image src={local} width="25" class="foot" />
            Beiro 3300 - Villa del Parque
            <br></br>
            <Image src={sobre} width="25" class="foot" />
            contacto@sanitarioscampana.com.ar
          </div>
          <div class="celular">
            <Image src={tel} width="30" />
            4503-6015

          </div>
        </div>


      </footer>
    </>

  );
}
export default FooterCasero;