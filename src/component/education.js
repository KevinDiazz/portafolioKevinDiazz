import "../css/education-style.css";
function Education({ children }) {
  return (
    <>
      <div className="aprendizaje col-12 d-flex  flex-wrap  justify-content-center">
        <div className="col-12 col-md-6">
          <ul className="aptitudes-info col-12 col-sm-12 col-md-12 col-xl-12 text-start">
            <li>
              <span className="span-animation">
                Compromiso con la mejora continua, explorando nuevas
                tecnologías.
              </span>
            </li>
            <li>
              <span className="span-animation">
                Manejo de estados y uso de hooks para componentes dinámicos.
              </span>
            </li>{" "}
            <li>
              <span className="span-animation">
                Manipulación del DOM y AJAX para peticiones asíncronas.
              </span>
            </li>{" "}
            <li>
              <span className="span-animation">
                Uso de librerías externas para optimizar el desarrollo.
              </span>
            </li>
            <li>
              <span className="span-animation">
                Gestión de paquetes y dependencias NPM
              </span>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-5">
          <ul className="aptitudes-info col-12 col-sm-12 col-md-12 col-xl-12 text-start">
            <li>
              <span className="span-animation">
                Aplicación de testing y principios de Clean Code.
              </span>
            </li>
            <li>
              <span className="span-animation">
                Desarrollo de aplicaciones en React
              </span>
            </li>{" "}
            <li>
              <span className="span-animation">
                Uso de control de versiones GIT
              </span>
            </li>
            <li>
              <span className="span-animation">
                Desarrollo de web a través de Wireframes
              </span>
            </li>
            <li>
              <span className="span-animation">
                Diseño responsivo para asegurar accesibilidad en diferentes
                dispositivos.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Education;
