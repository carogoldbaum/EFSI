import NavbarCasero from "../Component/NavbarCasero"

const Contacto = () => {

  return (
    <>
      <NavbarCasero></NavbarCasero>
      
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Apellido:
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Mail:
          <input type="text" name="name" />
        </label>
        <br></br>
        <label>
          Edad:
          <input type="text" name="name" />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
export default Contacto;