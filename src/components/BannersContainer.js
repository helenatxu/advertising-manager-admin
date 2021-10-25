import React, { Component } from 'react'
import update from 'immutability-helper'
import axios from 'axios'

class BannersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      banners: [],
      inputValue: ''
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

  createBanner = (e) => {
    if (e.key === 'Enter') {
      axios.post('/api/v1/banners', {banner: {name: e.target.value}})
      .then(response => {
        const banners = update(this.state.banners, {
          $splice: [[0, 0, response.data]]
        })
        this.setState({
          banners: banners,
          inputValue: ''
        })
      })
      .catch(error => console.log(error))
    }
  }

  handleChange = (e) => {
    this.setState({inputValue: e.target.value});
  }

  componentDidMount() {
    this.getBanners()
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
        <div className="inputContainer">
          <input className="bannerInput" type="text"
            placeholder="Add a banner" maxLength="50"
            onKeyPress={this.createBanner}
            value={this.state.inputValue} onChange={this.handleChange} />

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