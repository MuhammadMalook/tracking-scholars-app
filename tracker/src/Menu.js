import { Link,BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import { Navbar,Nav,Container, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Show from './Show';
import Admin from './Admin';
import Dashboard from './Dashboard';

function Routing(){
  
      return(
          <Switch>
          <Route exact path="/">
              <Admin />
          </Route>
          <Route exact path="/show">
              <Show />
          </Route>
          <Route path="/index">
              <Dashboard />
          </Route>
          </Switch>
      )
    }
function Menu()
{


    return (
        <>
      <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
        <div id="main-menu" className="collapse navbar-collapse">
                            <ul className="navbar-nav ">
                                <li className="nav-item ml-4"><Link to="/" className="nav-link">Admin</Link></li>
                                <li className="nav-item ml-4"><Link to="/index" className="nav-link">Index</Link></li>
                                <li className="nav-item ml-4"><Link to="/show" className="nav-link">Scholars</Link></li>   
                            </ul>
            </div>
        </Container>
      </Navbar>
      <Routing/>
      </Router>
    </>
      );
}
export default Menu;