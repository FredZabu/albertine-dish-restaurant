import React from 'react';

import { SubHeading } from '../../components'
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding ' id='home' >

    <div className="app__wrapper_infor">
      <SubHeading title="Chase the New flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p_opensans" style={{ margin: '2rem 0' }} >we are the best around town across the world of the living we enjoy come with us as we explore ffffffffffffjjjjjjjjjjj ddde uuuuuuuuuuuuuuu ssssssssssss ggggggggggg yyyyyyyyyyyyyyyyyyy ooooooooooooo </p>
       <button type='button' className="custom__button">Explore Menu</button>
     </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcoming to our restaurant" srcset="" />
    </div>

  </div>
);

export default Header;
