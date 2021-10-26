import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import update from 'immutability-helper';
import axios from 'axios';
import './bannersList.css';

const BannersList = ({banners, name}) => {
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
