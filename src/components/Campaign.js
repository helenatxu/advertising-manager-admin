import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';

const Campaign = () => {
  const { id } = useParams();
  const { data: campaign, error, isPending } =  useFetch('/api/v1/campaigns/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('/api/v1/campaigns/'+ campaign.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="campaign-details">
      <h3>Campaign Details</h3>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <article >
        <p>{campaign.name}</p>
        <button onClick={handleClick}>Delete</button>
      </article>
    </div>
  );
}

export default Campaign;
