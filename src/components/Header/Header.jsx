import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <img src="images/logo.png" alt="trillo logo" className="logo"/>

            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Search hotels" />
                
                <button className="search__button">
                    <svg className="search__icon">
                        <use xlinkHref="images/sprite.svg#icon-magnifying-glass"></use> 
                    </svg>
                </button>

                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="images/sprite.svg#icon-bookmark"></use>
                        </svg>
                        <span className="user-nav__notification">7</span>
                    </div>
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="images/sprite.svg#icon-chat"></use>
                        </svg>
                        <span className="user-nav__notification">13</span>
                    </div>
                   <div className="user-nav__user">
                       <img src="images/user.jpg" alt="Class Instructor" className="user-nav__user-photo" />
                       <span className="user-nav__user-name"></span>
                   </div>
                </nav>
            </form>
        </div>
    )
}

export default Header