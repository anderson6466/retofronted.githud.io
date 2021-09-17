import logo from './logo.svg';
import React, { Component } from 'react';
import { Card, CardHeader, CardContent } from "@material-ui/core";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Container  from '@material-ui/core/Container';
import Iniciocons from './components/Iniciocons';
import Formul from './components/Formul';
import Cotiza from './components/Cotiza';
import Finalizado from './components/Finalizado';
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Container fixed>

           <Card >


             
           </Card>



           </Container>
           
           
           
              <Switch>
              <Route exact path='/' component={Iniciocons}></Route>
              <Route exact path='/form' component={Formul}></Route>
              <Route exact path='/Cotiza' component={Cotiza}></Route>
              <Route exact path='/paginafinal' component={Finalizado}></Route>
            </Switch>
           </div>
       </Router>
   );
  }
}
export default App;
