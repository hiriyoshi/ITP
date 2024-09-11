import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">MikmakBook</Link>
      </h1>
      <ul>
        <li>
          <Link to="/create">Create your own Logo</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;