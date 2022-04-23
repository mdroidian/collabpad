import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <nav className="bg-dark navbar navbar-dark navbar-expand-md">
        <div className="container">
          <a className="navbar-brand" id="home" href="/">COLLABPAD</a>
          <button className="navbar-toggler" data-bs-target="#navbarContent" data-bs-toggle="collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="mb-2 mb-md-0 ms-auto navbar-nav ">
              <li className="nav-item">
                <a className="nav-link" href="#home">Dashboard</a>
              </li>
              <li className="dropdown nav-item">
                <a className="dropdown-toggle nav-link" data-bs-toggle="dropdown" href="#home">Browse</a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#home">Canvases</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#home">Journals</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#home">Notes</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown nav-item">
                <a className="dropdown-toggle nav-link" data-bs-toggle="dropdown" href="#home">Account</a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#home">Edit Profile</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#home">Settings</a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#home">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" placeholder="Search" type="search" />
                <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
