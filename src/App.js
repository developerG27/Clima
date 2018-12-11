import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import ToolBar from '@material-ui/core/Toolbar';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import LocationList from "./components/LocationList";

const cities = [
   "Buenos Aires,ar",
   "Washington,us",
   "Bogota,col",
   "Ciudad de México,mx",
   "Madrid,es",
   "Lima,pe",
];
class App extends Component {

   handleSelectionLocation = city => {
      console.log(`handleSelectionLocation ${city}`);
   }
  render() {
    return (
          <Grid>
             <Row>
                <AppBar position='sticky'>
                   <ToolBar>
                      <Typography variant='title' color='ineherit'>
                         React Clima
                      </Typography>
                   </ToolBar>
                </AppBar>
             </Row>

             <Row>
                <Col xs={12} sm={12} md={6}>
                   <LocationList
                     cities={cities}
                     onSelectedLocation={this.handleSelectionLocation}
                   />
                </Col>

                <Col xs={12} sm={12} md={6}>
                   <Paper elevation={4}>
                      <div className='details'></div>
                   </Paper>
                </Col>
             </Row>
          </Grid>
    );
  }
}

export default App;
