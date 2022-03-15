import clientId from '../auth.config.json';
import domain from '../auth.config.json';


export const environment = {
  production: false,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin
  }
};
