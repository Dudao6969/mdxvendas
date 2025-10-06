import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header'>
            {/* Logo */}
            <div className='logo'>
                <Link to='/'>
                    <span className='logo-1'>o</span>
                    <span className='logo-2'>l</span>
                    <span className='logo-3'>x</span>
                </Link>
            </div>

            {/* buca */}
            
            <div className='search-bar'>
                <input type='text' placeholder='buscar apartamento' />
                <div className='location'>
                    <button className='search-btn'>
                    <ion-icon name="search-outline"></ion-icon>
                    </button>
                </div>
            </div>

            {/*botoes */}

            <nav className='navbar'>
                <ul>
                    <li>
                        <Link to='/signin' className='entrarBtn'>Entrar</Link>
                    </li>
                    <li>
                    <Link to='/' className='anunciarBtn'>Anunciar gratis</Link>
                    </li>
                </ul>
            </nav>

            
        </header>
    )
}