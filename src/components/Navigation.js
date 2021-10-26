import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar">
      <h1>React Admin App</h1>
      <div className="links">
        <Link to="/">Admin main page</Link>
        <Link to="/create">Create Banner</Link>
      </div>
    </nav>
  );
}

export default Navigation;