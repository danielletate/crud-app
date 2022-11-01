import React from 'react';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  let history = useNavigate();

  const handleEditItem = (id, name, age) => {
    localStorage.setItem('Name', name);
    localStorage.setItem('Age', age);
    localStorage.setItem('Id', id);
  };

  const handleDeleteItem = (id) => {
    // Returns particular employee from Employees array based on id parameter and index of id
    const index = Employees.map((e) => {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);

    history('/');
  };

  return (
    <React.Fragment>
      <div style={{ margin: '10rem' }}>
        <h1 className="text-center text-primary text-uppercase mb-5">
          Employees
        </h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0
              ? Employees.map((item) => {
                  return (
                    <tr>
                      <td>{item.Name}</td>
                      <td>{item.Age}</td>
                      <td>
                        <Link to={`/edit`}>
                          <Button
                            onClick={() =>
                              handleEditItem(item.id, item.Name, item.Age)
                            }
                          >
                            Edit
                          </Button>
                        </Link>
                        &nbsp;
                        <Button onClick={() => handleDeleteItem(item.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })
              : 'No data available'}
          </tbody>
        </Table>
        <br></br>
        <Link className="d-grid gap-4" to="/create">
          <Button size="lg">Create</Button>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Home;
