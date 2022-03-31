import { Container, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Login from "./Login";
import SignUp from './SignUp';
import Games from "./Games";
import MeetUps from './MeetUps';
import MeetUpForm from './MeetUpForm';

function App() {
  return (
   <>
   <Container className="bg-secondary">
     <Row>
      <NavBar />
    </Row>
    <Row>
      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/games" >
          <Games />
        </Route> 
        <Route path="/meetups/new">
          <MeetUpForm />
        </Route>
        <Route path="/meetups">
          <MeetUps />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch> 
    </Row>
    </Container>
   </>
  );
}

export default App;
