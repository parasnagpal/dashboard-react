import React from 'react';
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Home=()=>(
    <React.Fragment>
    <div>
        Hello, welcome to teams page.
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
                    Key
                  </th>
                  <th scope="col" className="border-0">
                    Name
                  </th>
                  <th scope="col" className="border-0">
                    Status
                  </th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td></td>
                  <td></td>
                  
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td></td>
                  <td></td>  
                </tr>
                <tr>
                  <td>4</td>
                  <td></td>
                  <td></td>
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