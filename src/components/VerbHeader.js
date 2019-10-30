import React, { useContext } from 'react';
import { StoreContext } from '../context/storeContext';
import { Button, Navbar } from 'react-bootstrap';
import logo from '../logo.png';


export default () => {
  const { toggleVerbsListVisibility, isVisibleList, ref } = useContext(StoreContext);
  return (
    <Navbar className="d-flex align-items-center flex-column"
            variant="light"
            bg="light"
            ref={ref}
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
      <Button variant="outline-primary"
              type="button"
              onClick={toggleVerbsListVisibility}
      >
        { isVisibleList ? 'Hide verbs' : 'Show verbs' }
      </Button>
    </Navbar>
  )
}
