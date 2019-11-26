import React, {useContext} from 'react';
import { Button } from "react-bootstrap";
import { StoreContext } from "../context/storeContext";

export default () => {
  const { toggleVerbsListVisibility, isVisibleList } = useContext(StoreContext);
  return (
    <div className="d-flex justify-content-center m-3">
      <Button variant="outline-primary"
            type="button"
            id="show-verb-btn"
            onClick={toggleVerbsListVisibility}
      >
        { isVisibleList ? 'Hide verbs' : 'Show verbs' }
      </Button>
    </div>
  )
}
