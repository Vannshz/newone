import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';

const domain=  "dev-kjam98w8.us.auth0.com";
const clientId=  "MegpxqNBfl4cqRKE7exYseBi1sjuO5lD";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Auth0Provider 
    domain={domain}
   clientId={clientId}
   redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>
 
);

 
