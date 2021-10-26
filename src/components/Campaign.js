import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch';
import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

const Campaign = () => {
  const { id } = useParams();
  const { data: campaign, error, isPending } =  useFetch('/api/v1/campaigns/' + id);
  const history = useHistory();

  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  const addBanner = () => {
    setIndexes(prevIndexes => [...prevIndexes, counter]);
    setCounter(prevCounter => prevCounter + 1);
  };

  const removeBanner = index => () => {
    setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
    setCounter(prevCounter => prevCounter - 1);
  };

  const clearBanners = () => {
    setIndexes([]);
  };

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

      <form onSubmit={handleSubmit(onSubmit)}>
        {indexes.map(index => {

          const fieldName = `banners[${index}]`;
          return (
            <fieldset name={fieldName} key={fieldName}>
              <label>
                First Name {index}:
                <input {...register('name', { required: true })} />

              </label>

              <button type="button" onClick={removeBanner(index)}>
                Remove
              </button>
            </fieldset>
          );
        })}

        <button type="button" onClick={addBanner}>
          Add Banner
        </button>
        <button type="button" onClick={clearBanners}>
          Clear Banners
        </button>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Campaign;
