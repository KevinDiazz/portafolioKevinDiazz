import "../css/proyectos-style.css";
function Proyectos() {
  return (
    <>
      <div className="container-proyectos">
        <h3 className="titulo text-center  mb-4 fs-1 col-12 ">
          <strong>Proyectos</strong>
        </h3>
        <div className="col-12 d-flex justify-content-center">
          <div className="row row-cols-1 row-cols-xl-2 row-cols-md-1 row-cols-sm-1 g-5 col-9">
            <div className="col">
              <a
                href="https://github.com/KevinDiazz/RegistradorDeDatos"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card h-100">
                  <img
                    src={require("../images/Captura de pantalla 2023-11-16 194602.png")}
                    className="card-img-top h-75"
                    alt="proyect-img"
                  />
                  <div className="card-body ">
                    <h5 className="card-title">Registro de Datos</h5>
                    <p className="card-text">
                      Esta web tiene la funcionalidad de registrar datos, estos
                      datos pasarán validación y una vez este todo correcto
                      podrás descargar un PDF con los datos introducidos
                    </p>
                    <a
                      href="https://github.com/KevinDiazz/RegistradorDeDatos"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn btn-primary">ver en Github</button>{" "}
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                href="https://github.com/KevinDiazz/LitleLemon"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card h-100">
                  <img
                    src={require("../images/web1 (4).png")}
                    className="card-img-top h-75"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">Web Restaurante</h5>
                    <p className="card-text">
                      Página web de un restaurante con sistema de reservas, la
                      cual la hora es obtenida desde una API falseada, tendrás
                      ciertas horas para elegir almorzar, número de comensales,
                      tipo de cena…
                    </p>
                    <a
                      href="https://github.com/KevinDiazz/LitleLemon"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn btn-primary">ver en Github</button>{" "}
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                href="https://github.com/KevinDiazz/cocktails"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card h-100">
                  <img
                    src={require("../images/web1 (3).png")}
                    className="card-img-top h-75"
                    alt="proyect-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Web Cocktails</h5>
                    <p className="card-text">
                      Página web creada con React que muestra información de
                      algunos tipos de cocktails.
                    </p>
                    <a
                      href="https://github.com/KevinDiazz/cocktails"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn btn-primary">ver en Github</button>{" "}
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                href="https://github.com/KevinDiazz/testRealMadrid"
                target="_blank"
                rel="noreferrer"
              >
                <div className="card h-100">
                  <img
                    src={require("../images/web1 (1).png")}
                    className="card-img-top h-75"
                    alt="proyect-img"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Quiz</h5>
                    <p className="card-text">
                      Quiz de preguntas sobre el real madrid con validacion de
                      respuestas
                    </p>
                    <a
                      href="https://github.com/KevinDiazz/testRealMadrid"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn btn-primary">ver en Github</button>{" "}
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <p className="text-center mt-5 p-5 fs-5">
          Para ver más proyectos visite mi{" "}
          <a
            className="github-link"
            href="https://github.com/KevinDiazz"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          <a
            href="https://github.com/KevinDiazz"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="logoGit"
              alt="logo"
              src={require("../images/pngegg (6).png")}
            ></img>
          </a>
        </p>
        <div className="col-12">
          <div
            className="accordion certificados w-100 d-flex justify-content-center mt-5"
            id="accordionPanelsStayOpenExample"
          >
            <div className="acordeon-item accordion-item w-50">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <h5  id="certificados" className="text-center">Certificados</h5>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show item2"
              >
                <div className="accordion-body">
                  <div className="">
                    <ul className="list-curses d-flex flex-sm-column flex-wrap align-content-around">
                      <li className="w-100 animate">
                        <p className="col-12 col-md-5 col-xl-4 d-inline-block">
                          Certificado OpenBootCamp Javascript{" "}
                        </p>
                        <button
                          type="button"
                          className="button-curses btn btn-sm btn-primary float-md-end mt-2 float-center"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          ver
                        </button>
                      </li>
                      <li className="w-100 animate2">
                        <p className="col-12 col-md-5 col-xl-4 d-inline-block">
                          Certificado OpenBootCamp{" "}
                        </p>
                        <button
                          type="button"
                          className="button-curses btn btn-sm btn-primary float-md-end mt-2 float-center"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal2"
                        >
                          ver
                        </button>
                      </li>
                      <li className="w-100 animate3">
                        <p className="col-12 col-md-5 col-xl-4 d-inline-block">
                          Certificado freeCodeCamp
                        </p>
                        <button
                          type="button"
                          className="button-curses btn btn-sm btn-primary float-md-end mt-2 float-center"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal3"
                        >
                          ver
                        </button>
                      </li>
                      <li className="w-100 animate4">
                        <p className="col-12 col-md-5 col-xl-4 d-inline-block">
                          Certificado Meta desarollo Front End
                        </p>
                        <button
                          type="button"
                          className="button-curses btn btn-sm btn-primary float-md-end mt-2 float-center"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal4"
                        >
                          ver
                        </button>
                      </li>
                    </ul>

                    <div
                      className="modal fade"
                      id="exampleModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-4"
                              id="exampleModalLabel"
                            >
                              OpenBootCamp Certificado
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <img
                              className="w-100"
                              src={require("../images/Captura de pantalla 2023-11-15 210916.png")}
                              alt="img-curses"
                            ></img>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id="exampleModal2"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              OpenBootCamp Certificado
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <img
                              className="w-100"
                              src={require("../images/Captura de pantalla 2023-11-15 210931.png")}
                              alt="img-curses"
                            ></img>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id="exampleModal3"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              freeCodeCamp Certificado
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <img
                              className="w-100"
                              src={require("../images/Captura de pantalla_20230228_233703.png")}
                              alt="img-curses"
                            ></img>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className="modal fade"
                      id="exampleModal4"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h1
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Meta desarollo Front End
                            </h1>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <img
                              className="w-100"
                              src={require("../images/Captura de pantalla 2023-11-15 210946.png")}
                              alt="img-curses"
                            ></img>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Proyectos;
