import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = (props) => {

  const authButton = () => (props.auth) ?
    <li><a href="/api/logout">Logout</a></li> :
    <li><a href="/api/auth/google">Login</a></li>;

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">React SSR</Link>
        <ul className="right">
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/admins">Admins</Link></li>
          {authButton()}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
