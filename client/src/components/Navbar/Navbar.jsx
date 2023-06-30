import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.scss'
import Cart from '../Cart/Cart';

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [showNav, setShowNav] = useState(false)

    const products = useSelector(state=>state.cart.products)

    const totalCart = () => {
        let total = 0
        products.forEach(item => 
            total += item.quantity)
            return total
    }

    const handleShowNavbar = () => {
        setShowNav(!showNav)
    }

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className={`left ${showNav ? 'active' : ''}`}>
                    <div className="item item1">
                        <Link className='link' to='/products/1'>Cubes</Link>
                    </div>
                    <div className="item item2">
                        <Link className='link' to='/products/2'>Chess</Link>
                    </div>
                    <div className="item item3">
                        <Link className='link' to='/products/3'>Cards</Link>
                    </div>
                    <div className="item item4">
                        <Link className='link' to='/products/4'>Accessories</Link>
                    </div>
                    
                </div>
                <div className="center">
                    <Link className='link' to="/">ELI'S CORNER</Link>
                </div>

                <div className="wrap">
                    <div className={`right ${showNav ? 'active' : ''}`}>
                        
                        <div className="item item2">
                            <Link className='link' to="/about">About / Contact</Link>
                        </div>
                       
                    </div>
                    <div className="icons">
                    {/* <SearchIcon/>
                    <PersonOutlineOutlinedIcon/>
                    <FavoriteBorderOutlinedIcon/> */}
                        <div className="cartIcon" onClick={() => setOpen(!open)}>
                            <ShoppingCartOutlinedIcon/>
                            <span>{totalCart()}</span>
                        </div>
                    </div>
                    <div className="hamburger">
                            <MenuIcon onClick={handleShowNavbar}/>
                    </div>
                </div>

                <div className={`mobile ${showNav ? "active" : "inactive"}`}>
                    <div className="item item1">
                        <Link className='link' to='/' onClick={handleShowNavbar}>Home</Link>
                    </div>
                    <div className="item item6">
                        <Link className='link' to="/about" onClick={handleShowNavbar}>About</Link>
                    </div>
                    <div className="line">
                    </div>
                    <div className="item item1">
                        <Link className='link' to='/products/1' onClick={handleShowNavbar}>Cubes</Link>
                    </div>
                    <div className="item item2">
                        <Link className='link' to='/products/2' onClick={handleShowNavbar}>Chess</Link>
                    </div>
                    <div className="item item3">
                        <Link className='link' to='/products/3' onClick={handleShowNavbar}>Cards</Link>
                    </div>
                    <div className="item item4">
                        <Link className='link' to='/products/4' onClick={handleShowNavbar}>Accessories</Link>
                    </div>
                   

                </div>
                   
                   
            </div>
            {open && <Cart/>}
        </div>
    )
}

export default Navbar