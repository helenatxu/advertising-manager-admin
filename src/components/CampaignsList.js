import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const CampaignsList = () => {
  const {data: campaigns, isPending, error} = useFetch('/api/v1/campaigns');

  return (
    <div className="campaign-list">
      <h2>Campaigns List</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}

      {campaigns.map(campaign => (
        <div className="campaign-preview" key={campaign.id}>
          <Link to={`/api/v1/campaigns/${campaign.id}`}>
            <p>{campaign.name}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CampaignsList;
