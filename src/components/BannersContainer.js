import React, { Component } from 'react'
import update from 'immutability-helper'
import axios from 'axios'

class BannersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      banners: []
    }
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

  componentDidMount() {
    this.getBanners()
  }

  render() {
    return (
      <div>
        <div className="inputContainer">
          <input className="bannerInput" type="text"
            placeholder="Add a banner" maxLength="50"
            onKeyPress={this.createBanner} />
        </div>
  <div className="listWrapper">
     <ul className="bannerList">
      {this.state.banners.map((banner) => {
        return(
          <li className="banner" banner={banner} key={banner.id}>

      <p className="bannerLabel">{banner.name}</p>
      <p className="bannerLabel">{banner.text}</p>
      <span className="deleteBannerBtn">x</span>
          </li>
        )
      })}
     </ul>
  </div>
     </div>
    )
  }
}

export default BannersContainer