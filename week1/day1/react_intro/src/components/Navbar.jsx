import React from "react";
import Button from "./Button";

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
          <Button />
        </ul>
      </nav>
    );
  }
}

export default Navbar;
