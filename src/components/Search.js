import React, { useContext } from 'react';
import { StoreContext } from '../context/storeContext';
import { Form } from 'react-bootstrap';

export default () => {
  const { verbs, search, setVerb, setSearchValue } = useContext(StoreContext);
  const handleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value.length > 2) {
      const currentVerb = verbs.find(({ title }) => title.includes(value));
      if (currentVerb) {
        setVerb(currentVerb)
      }
    }
  };
  return (
    <div className="d-flex align-items-center justify-content-center"
         id="search"
    >
      <Form.Control type="search"
                    className="border-primary"
                    placeholder="Search..."
                    id="search-input"
                    value={search}
                    onChange={handleChange}
      />
    </div>
  )
}
