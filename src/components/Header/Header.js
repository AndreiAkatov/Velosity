import "./header.css";

function Header() {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="header__inner">
                    <a href="#" className="header__logo">Velocity</a>
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-item">
                                <a href="#" className="header__menu-link">
                                    Home
                                </a>
                            </li>
                            <li className="header__menu-item">
                                <a href="#" className="header__menu-link">
                                    Contact
                                </a>

                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;