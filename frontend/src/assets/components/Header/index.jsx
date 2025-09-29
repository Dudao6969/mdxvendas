import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header'>
            {/* Logo */}
            <div className='logo'>
                <Link to='/'>
                    <span className='logo-1'>S</span>
                    <span className='logo-2'>K</span>
                    <span className='logo-3'>C</span>
                </Link>
            </div>

            {/* buca */}
            
            <div className='search-bar'>
                <input type='text' placeholder='buscar apartamento' />
                <div className='location'>
                    <button className='search-btn'>
                    <ion-icon name="search-outline"></ion-icon>"
                    </button>
                </div>
            </div>

            
        </header>
    )
}