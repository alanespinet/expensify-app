import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404: These are not the droids you are looking for... (hand move)
    <p><Link to="/">You will let us pass to the home page...</Link></p>
  </div>
);

export default NotFoundPage;
