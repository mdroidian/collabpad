import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <ul className="nav nav-pills flex-column mb-auto">
        <li><a href="#home" className="nav-link link-dark"><i className="bi bi-speedometer2 me-2"></i>Dashboard</a></li>
        <li><a href="#home" className="nav-link link-dark active"><i className="bi bi-journal-bookmark-fill me-2"></i>Journal</a></li>
        <li><a href="#home" className="nav-link link-dark"><i className="bi bi-diagram-3 me-2"></i>Canvas</a></li>
        <li><a href="#home" className="nav-link link-dark"><i className="bi bi-person-fill me-2"></i>Profile</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
