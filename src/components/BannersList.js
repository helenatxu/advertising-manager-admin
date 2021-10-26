import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import update from 'immutability-helper';
import axios from 'axios';
import './bannersList.css';

class BannersList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      banners: [],
      inputValue: ''
    }
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  componentDidMount() {
    this.getBanners()
  }


  deleteBanner = (id) => {
    axios.delete(`/api/v1/banners/${id}`)
    .then(response => {
      const bannerIndex = this.state.banners.findIndex(x => x.id === id)
      const banners = update(this.state.banners, {
        $splice: [[bannerIndex, 1]]
      })
      this.setState({
        banners: banners
      })
    })
    .catch(error => console.log(error))
  }

  render() {
              )
            })}
           </ul>
  return (
    <div className="banner-list">
      <h2>Banners List</h2>
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
