import React from 'react';
import {
  Link,
  useHistory
} from "react-router-dom";

function Menu(props) {
    let history = useHistory()

  return (
      <div>
            { history.push('/about') }
      </div>
  );
}

export default Menu;