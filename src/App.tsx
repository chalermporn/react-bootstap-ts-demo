import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./custom.scss";

import {Table} from 'react-bootstrap';

function App() {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Larry the Bird</td>
        <td>ss</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table>
  );
}

export default App;
