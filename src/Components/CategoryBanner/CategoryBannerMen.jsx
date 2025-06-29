import React from 'react'
import './CategoryBanner.css'
import menbannerimg from '../Assets/Men-banner.png'

const CategoryBannerMen = () => {
  return (
    <div className='CategoryBanner'>      
            <h1>Men's Collection</h1>
            <div className="CategoryBanner_img">
              <img src={menbannerimg} alt="catbannerimg" />
            </div>
    </div>
  )
}

export default CategoryBannerMen