import React from 'react';
import './DescriptionBox.css';

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is an onlione platform that facilitare buying and selling of products, etc.</p>
            <p>Jewellery E-commerce</p>
        </div>
    </div>
  )
}

export default DescriptionBox;