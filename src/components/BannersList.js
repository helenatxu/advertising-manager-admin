import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const BannersList = () => {
  const {data: banners, isPending, error} = useFetch('/api/v1/banners');

  return (
    <div className="banner-list">
      <h2>Banners List</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {banners.map(banner => (
        <div className="banner-preview" key={banner.id}>
          <Link to={`/api/v1/banners/${banner.id}`}>
            <p>{banner.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BannersList;
