import BannerList from './BannerList';
import useFetch from './useFetch';

const AdminPanel = () => {
    const {data: banners, isPending, error} = useFetch('/api/v1/banners');

    return (
        <div className="adminPanel">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            <BannerList banners={banners} title="All Banners"/>
        </div>
     );
}

export default AdminPanel;