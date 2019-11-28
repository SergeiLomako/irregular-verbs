import React, { useContext } from 'react';
import { StoreContext } from '../context/storeContext';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../logo.png';


export default () => {
  const { headerRef, resetState } = useContext(StoreContext);
  return (
    <>
      <Navbar className="d-flex align-items-center flex-column mb-2"
              variant="light"
              bg="light"
              ref={headerRef}
      >
        <Navbar.Brand>
          <img
            alt="logo"
            src={logo}
            className="align-center"
          />
          <span className="ml-2 font-italic align-center"
                id="header-text">
                Learning irregular verbs
              </span>
        </Navbar.Brand>
      </Navbar>
      <div className="d-flex justify-content-between align-items-center m-auto"
           id="link-list"
      >
        <Link to="/" onClick={resetState}>Learning</Link>
        <Link to="/exam" onClick={resetState}>Exam</Link>
      </div>
    </>
  )
}
