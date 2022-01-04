import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag


  return (
    <header>
      <h1>My Portfolio Page</h1>
      <div className="header">
  
        <Link to="/" style={{textDecoration: 'none'}}>
          <div className="link">HOME</div>
        </Link>
        <Link to="/about" style={{textDecoration: 'none'}}>
          <div className="link">ABOUT</div>
        </Link>
        <Link to="/projects" style={{textDecoration: 'none'}}>
          <div className="link">PROJECTS</div>
        </Link>

      </div>
    </header>
  );
}

export default Header;