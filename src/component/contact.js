import "../css/contacto-style.css";
function Contacto() {
  return (
    <>
      <div className="mt-5 contacto-container d-flex justify-content-center flex-column">
        <h3 className="text-center mb-4-1 p-3">
          <strong>Contacto</strong>
        </h3>
        <div className="d-flex gap-5 justify-content-center mt-3 flex-column flex-sm-row align-items-center">
          <div className="">
            <a
              href="https://www.linkedin.com/in/kevindiazsuarez/"
              target="_blank"
              rel="noreferrer"
            >
              Kevin diaz
              <img
                className="logo-contact"
                src={require("../images/pngegg (7).png")}
                alt="img-logo"
              ></img>
            </a>
          </div>
          <div className="">
            <a href="mailto:kevinds1895@gmail.com">
              kevinds1895@gmail.com
              <img
                className="logo-contact"
                src={require("../images/pngegg (8).png")}
                alt="img-logo"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contacto;
