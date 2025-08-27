import './index.scss';
import Link from 'next/link';


function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="page-title-link">
        <h1 className="page-title">Movie App</h1>
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
        <li>
          <Link href="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
