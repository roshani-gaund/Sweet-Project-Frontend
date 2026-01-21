// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Style.css'
import { Nav, Container, Navbar } from 'react-bootstrap';
import { ShoppingCart,User2, Search  } from 'lucide-react'; 
import { NavDropdown } from 'react-bootstrap';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';


function NavBar({onUserClick}) {
  //livesearch
  const { login } = useAuth();

  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const productList = [
    { name: 'Dry Fruits', path: '/DryFruits' },
    { name: 'Sweets', path: '/sweets' },
    { name: 'Snacks', path: '/snacks' },
    { name: 'Gifting', path: '/Gifting' },
    { name: 'Contact', path: '/Contact' },
    { name: 'Sugar Free', path: '/sweets' },
    { name: 'Laddo', path: '/sweets/laddo' },
    { name: 'Peda', path: '/sweets/peda' },
    { name: 'Festival Packs', path: '/sweets/festival-packs' },
    { name: 'Flavoured Nuts', path: '/DryFruits' },
    { name: 'Chocolate Packs', path: '/DryFruits/chocolate-packs' },
    { name: 'Assorted Gifting', path: '/Gifting' },
    { name: 'Personal Gifting', path: '/Gifting' },
    { name: 'Wedding Gifting', path: '/Gifting/wedding' },
    { name: 'Corporate Gifting', path: '/Gifting/corporate' },
    { name: 'Healthy Snacks', path: '/snacks' },
    { name: 'South Indian Special', path: '/snacks/south-indian' },
    { name: 'North Indian Special', path: '/snacks/north-indian' },
    { name: 'Banana Chips', path: '/snacks/banana-chips' },
    { name: 'Blogs', path: '/Blogs' },
    { name: 'About Us', path: '/AboutUs' },
    { name: 'Our Brands', path: '/AboutUs/our-brands' },
    { name: 'FootPrint', path: '/AboutUs/footprint' },
  ];

  // ✅ Toggle function
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setSearchQuery('');
    setSuggestions([]);
  };
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      const filtered = productList.filter(item => item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };
 
  

  return (
    <><Navbar expand="lg" className='navbar'>
      <Container fluid>
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav' className='navbar-collapse-custom'>
          <Nav className="me-auto flex-column flex-lg-row align-items-lg-center w-100">
            <ul className="nav-links">
              <li>
                <NavDropdown title="Shop All" id="nav-dropdown-ShopAll">
                  <NavDropdown.Item as={Link} to="/DryFruits"> Dry Fruits</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/sweets">Sweets</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/snacks">Snacks</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Gifting">Gifting</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Contact">Contact</NavDropdown.Item>
                </NavDropdown>
              </li>
            </ul>

            <ul className='nav-links' style={{ marginLeft: '5%' }}>

              <li><Link to="/">Home</Link></li>
              <li>
                <NavDropdown title="Sweets" id="nav-dropdown-sweets">
                  <NavDropdown.Item as={Link} to="/sweets">All Sweets</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/sweets">Sugar Free</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/sweets">Laddo</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/sweets">Peda</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/sweets">Festival Packs</NavDropdown.Item>
                </NavDropdown>
              </li>
              <li>
                <NavDropdown title="DryFruits" id="nav-dropdown-DryFruits">
                  <NavDropdown.Item as={Link} to="/DryFruits">All Dry Fruits</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/DryFruits">Flavoured Nuts</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/DryFruits">Chocolate Packs</NavDropdown.Item>
                </NavDropdown>
              </li>
              <li>
                <NavDropdown title="Gifting" id="nav-dropdown-Gifting">
                  <NavDropdown.Item as={Link} to="/Gifting">Assorted Gifting</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Gifting">Personal Gifting</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Gifting">Wedding Gifting</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Gifting">Carporate Gifting</NavDropdown.Item>

                </NavDropdown>
              </li>
              <li>
                <NavDropdown title="Snacks" id="nav-dropdown-snacks">
                  <NavDropdown.Item as={Link} to="/snacks">Healthy Snacks</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/snacks">South Indian Special</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/snacks">North Indian Special</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/snacks">Banana Chips</NavDropdown.Item>

                </NavDropdown>
              </li>


              <li>
                <NavDropdown title="Contact" id="nav-dropdown-Contact">
                  <NavDropdown.Item as={Link} to="/Contact">Blogs</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>

                </NavDropdown>
              </li>
              <li>
                <NavDropdown title="About Us" id="nav-dropdown-About-Us">
                  <NavDropdown.Item as={Link} to="/AboutUs">About Us</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/AboutUs">Our Brands</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/AboutUs">FootPrint</NavDropdown.Item>
                </NavDropdown>
              </li>


            </ul>
          </Nav>

        </Navbar.Collapse>
        <div className='nav-react-icon '>
          {showSearch && (
            <div className='search-container'>
              <input
                type="text"
                value={searchQuery}
                placeholder="Search here..."
                className="search-input"
                onChange={handleSearchChange} />
              {suggestions.length > 0 && (
                <ul className="search-suggestions">
                  {suggestions.map((item, index) => (
                    <li key={index}><Link style={{ color: 'black', textDecoration: 'none', fontFamily: "inherit" }} to={item.path} onClick={() => setSuggestions([])}>
                      {item.name}
                    </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}


          <Search style={{ marginRight: '40px', cursor: 'pointer' }} onClick={toggleSearch} />

          <User2
            size={24}
            style={{ cursor: 'pointer', marginRight: '30px' }}  onClick={onUserClick}
             />
    
           
          <Link to="/cart">
            <ShoppingCart style={{ color: 'black', textDecoration: 'none', marginRight: '20px', position: 'relative', cursor: 'pointer' }}   />
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
         </Link>

        </div>
      </Container>
    </Navbar>
    </>



  );
}

export default NavBar;
