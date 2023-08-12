import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">
      Sign up
      </NavLink>
      <NavLink to="/login">
      Sign in
      </NavLink>
    </div>
  );
};