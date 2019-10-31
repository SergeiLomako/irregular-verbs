import React, { useContext } from 'react';
import { Button, Navbar } from 'react-bootstrap';
import { StoreContext } from '../context/storeContext';

export default () => {
  const { isVisibleList, verbs, currentVerb, setVerb, headerRef } = useContext(StoreContext);
  const handleClick = (e) => {
    e.preventDefault();
    const currentVerb = verbs.find(({ title }) => title === e.currentTarget.textContent);
    headerRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    return setVerb(currentVerb)
  };
  return isVisibleList ? (
    <Navbar bg="light"
            variant="light"
            className="d-flex align-items-center justify-content-start flex-wrap"
            id="verb-list"
    >
      {
        verbs.sort((prev, next) => next.title > prev.title ? -1 : 1).map(({ title }, index) =>
          <Button className={`btn btn-sm verb-variant-item ${title === currentVerb.title && 'active'}`}
                  variant="outline-primary"
                  onClick={handleClick}
                  key={`${title}-${index}`}
          >
            {title}
          </Button>
        )
      }
    </Navbar>
  ) : null
}
