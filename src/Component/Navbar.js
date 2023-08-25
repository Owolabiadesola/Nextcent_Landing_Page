const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light pt-4">
      <div className="container">
        <img className="img-fluid" src="/Images/Logo.png" alt="img" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav " id="navbarlist">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Feauture
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="btndiv">
          <button id="lgbtn">Login</button>
          <button id="spbtn">Sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
