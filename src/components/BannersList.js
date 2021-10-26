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

  getBanners() {
    fetch('/api/v1/banners')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({banners: data})
    })
    .catch(error => console.error(error));
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
    return (
      <div>
        <div className="listWrapper">
           <ul className="bannerList">
            {this.state.banners.map((banner) => {
              return(
                <div className="banner-preview" key={banner.id}>
                  <Link to={`/banners/${banner.id}`}>
                    <p>{banner.title}</p>
                    <li className="banner" banner={banner} key={banner.id}>
                      <span className="deleteBannerBtn"
                        onClick={(e) => this.deleteBanner(banner.id)}>
                        x
                      </span>
                      <p className="bannerLabel">{banner.name}</p>
                      <p className="bannerLabel">{banner.text}</p>
                    </li>
                  </Link>
                </div>
              )
            })}
           </ul>
        </div>
     </div>
    )
  }
}

export default BannersList