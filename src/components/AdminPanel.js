import { Link } from 'react-router-dom';

const AdminPanel = () => {

  return (
    <div className="adminPanel">
      <h1>Admin panel</h1>

      <Link to={`/api/v1/banners/`}>
        <p>Manage banners</p>
      </Link>

    </div>
  );
}

export default AdminPanel;