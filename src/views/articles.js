import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody ,Button} from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Home=()=>(
    <React.Fragment>
    <div>
        Hello, welcome to articles page.
    </div>
    <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Teams Info" subtitle="TEAMS" className="text-sm-left" />
    </Row>

    
    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">Teams And status</h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="border-0">
                    Id
                  </th>
                  <th scope="col" className="border-0">
                    Title 
                  </th>
                  <th scope="col" className="border-0">
                    Created at
                  </th>
                  <th>
                    Edit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  <td><Button className='btn-light'>Edit</Button></td>
                  
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td><Button className='btn-light'>Edit</Button></td>

                </tr>
                <tr>
                  <td>3</td>
                  <td></td>
                  <td></td>  
                  <td><Button className='btn-light'>Edit</Button></td>

                </tr>
                <tr>
                  <td>4</td>
                  <td></td>
                  <td></td>
                  <td><Button className='btn-warning'>Edit</Button></td>

                </tr>
              </tbody>
            </table>
           </CardBody>
         </Card>
       </Col>
      </Row>
    </Container>
    </React.Fragment>
);

export default Home