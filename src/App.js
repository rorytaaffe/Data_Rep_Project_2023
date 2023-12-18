// Import necessary styles and components
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./components/content";
import Footer from "./components/footer";
import Header from "./components/header";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import New from "./components/new";
import Mma from "./components/mma";
import Change from "./components/change";

// Main component representing the entire application
function App() {
  return (
    // Set up the BrowserRouter to enable routing
    <BrowserRouter>
      <div className="App">
        {/* Navigation Bar */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/new">New</Nav.Link>
              <Nav.Link href="/mma">Mma</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        {/* Routes for different components */}
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Content></Content>}></Route>

          {/* Mma route */}
          <Route path="/mma" element={<Mma></Mma>}></Route>

          {/* New Fighter route */}
          <Route path="/new" element={<New></New>}></Route>

          {/* Change Fighter route with dynamic ID parameter */}
          <Route path="/change/:id" element={<Change></Change>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// Export the App component to make it available for use in other parts of the application
export default App;
