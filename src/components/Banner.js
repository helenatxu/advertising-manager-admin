import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const Banner = () => {
  const { id } = useParams();
  const { data: banner, error, isPending } =  useFetch('/api/v1/banners/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('/api/v1/banners/'+ banner.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="banner-details">
      <h3>Banner Details</h3>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <article >
        <p>{banner.name}</p>
        <div>{banner.text}</div>
        <button onClick={handleClick}>Delete</button>
      </article>
    </div>
  );
}

export default Banner;
