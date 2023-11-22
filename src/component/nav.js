import "../css/nav-style.css";
function Nav() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="nav navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse  text-center collapse d-flex-md justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav  col-12 d-flex justify-content-evenly">
            <li
              className="nav-item nav-link"
              onClick={() => scrollToSection("proyectos")}
            >
              Proyectos
            </li>
            <li className="nav-item nav-link " onClick={() => scrollToSection("certificados")}>Educación</li>
            <li className="nav-item nav-link" onClick={() => scrollToSection("contacto")}>Contacto</li>
            <li className="nav-item nav-link">
              <a
                className="nav-link"
                href="https://drive.google.com/uc?export=download&id=15TB0ee2Z0cGqfXxmHkUqZq96fsyAy6lq"
              >
                Descargar Cv
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Nav;
