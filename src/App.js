import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import TopNavBar from './components/qe-topnavbar';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12}>
            <TopNavBar />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
