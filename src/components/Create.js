import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const banner = { name, text };

    setIsPending(true);

    fetch('/api/v1/banners/', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(banner)
    }).then(() => {
      setIsPending(false);
      history.push('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Banner</h2>
      <form onSubmit={handleSubmit}>
        <label>Banner Name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Banner Text:</label>
        <textarea
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {!isPending && <button>Add Banner</button>}
        {isPending && <button disabled>Adding Banner</button>}
      </form>
    </div>
  );
}

export default Create;