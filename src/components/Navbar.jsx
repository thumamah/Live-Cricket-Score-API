import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.svg'
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'

const Navbars = () => {
    

  return (
    <>
   
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-center"
            />{' '}
            
            <strong>Live Cricket Score</strong>
            
            
          </Navbar.Brand>
          <Link to='/'>
            <h3>Dashboard</h3>
            </Link>

          <Link to='/FetchScore'>
            <h3>Live Cricket Score</h3>
            </Link>

            {/* <Link to='/FetchPlayers'>
            <h3>Players Info</h3>
            </Link> */}

            <Link to='/UseFetch'>
            <h3>Team Info</h3>
            </Link>
          
        
        </Container>
        
      </Navbar>
      
    </>
  );
}

export default Navbars