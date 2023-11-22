import "../css/about-me.css";
function AboutMe({ children }) {
  return (
    <>
      <div className="d-flex  flex-wrap justify-content-center gap-3 col-xl-12 col-sm-12 container-about align-items-center mt-3">
        <div className="col-xl-3 d-flex col-6 flex-column align-items-center order-2">
          <img
            className="img-profile d-none d-xl-block"
            src={require("../images/Imagen de WhatsApp 2023-11-21 a las 01.10.00_dc9f9b25.jpg")}
            alt="img-profile"
          ></img>
          <p className="titulo titulo-2 fs-2 text-center mt-5 col-12 mb-0">
            <strong>Aptitudes</strong>
          </p>
        </div>
        <div className="col-12 col-md-8 col-xl-6 d-flex flex-column">
          <h1 className="title  align-self-center animate__animated animate__bounceInLeft">
            Kevin Díaz
          </h1>
          <p className="aboutMe-info text-center fs-5">
            ¡Hola!, soy un desarrollador web con una sólida formación
            autodidacta y experiencia adquirida a través de bootcamps
            especializados, centrándome en tecnologías basadas en front-end como
            JavaScript, React, HTML y CSS.
          </p>
          {children}
        </div>
      </div>
    </>
  );
}
export default AboutMe;
