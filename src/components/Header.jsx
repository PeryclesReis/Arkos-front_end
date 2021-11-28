import React from 'react';
import { Form, Button, FormControl, Navbar,
  ButtonGroup, ToggleButton,
} from 'react-bootstrap';

function Header() {

  return (
    <div className="header">
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </div>
  );
}

export default Header;
