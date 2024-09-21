import React from 'react';
import css from '../css/landcss.module.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <nav className={css.navigation}>
        <div >
            <Link className={css.Link} to="/">Home</Link>
            <Link className={css.Link} to="/Dashboard">Dashboard</Link>
        </div>
        <div className={css.nav1}>
            <Link className={css.Link} to="/Login">Login</Link>
            <Link className={css.Link} to="/Signup">SignUp</Link>
        </div>
      <hr />
    </nav>
  );
}

export default LandingPage;
