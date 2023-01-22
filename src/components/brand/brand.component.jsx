import React from 'react';

// Helpers
import {
  google,
  shopify,
  slack,
  atlassian,
  dropbox,
} from './helper/imports.helper';

// Styles
import './brand.styles.css';

export const Brand = () => {
  return (
    <div className='gpt3__brand section__padding'>
      <div>
        <img src={google} alt='google' />
      </div>
      <div>
        <img src={slack} alt='slack' />
      </div>
      <div>
        <img src={atlassian} alt='atlassian' />
      </div>
      <div>
        <img src={dropbox} alt='dropbox' />
      </div>
      <div>
        <img src={shopify} alt='shopify' />
      </div>
    </div>
  );
};
