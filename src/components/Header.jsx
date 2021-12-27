import { Navbar, Container, Nav } from "react-bootstrap";
import User from "./User";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">TimeTable app</Navbar.Brand>
          <Nav.Item>
            <Nav.Link href="/">Darbai</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/companies">Įmonės</Nav.Link>
          </Nav.Item>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text><User/></Navbar.Text>
          </Navbar.Collapse>

          {/* <Button variant="primary">Valdyti imones</Button>

          <Button className="m-2" variant="primary">
            Valdyti darbus
          </Button> */}
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
