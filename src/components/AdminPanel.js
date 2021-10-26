import BannersList from './BannersList';
import useFetch from './useFetch';

const AdminPanel = () => {
  const {data: banners, isPending, error} = useFetch('/api/v1/banners');

  return (
    <div className="adminPanel">
      <h1>Admin panel</h1>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <BannersList banners={banners} name="All Banners"/>
    </div>
  );
}

export default AdminPanel;