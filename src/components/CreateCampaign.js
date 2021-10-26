import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateCampaign = () => {
  const [name, setName] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const campaign = { name };

    setIsPending(true);

    fetch('/api/v1/campaigns/', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(campaign)
    }).then(() => {
      setIsPending(false);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Campaign</h2>
      <form onSubmit={handleSubmit}>
        <label>Campaign Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {!isPending && <button>Add Campaign</button>}
        {isPending && <button disabled>Adding Campaign</button>}
      </form>
    </div>
  );
}

export default CreateCampaign;