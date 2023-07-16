import { useState } from "react";
import "./MobileHamburgerNav.css";

const MobileHamburgerNav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="nav-mobile-outer-div shadow-frame">
			<button
				className={`hamburgerBtn ${isOpen ? "collapsed" : ""}`}
				aria-label="Toggle Navigation"
				onClick={toggleNav}
			>
				<span className="hamburger"></span>
			</button>
			<div id="nav-mobile-menu-div" className={`nav-mobile-menu-div ${isOpen ? "show" : ""}`} >
				<div className="nav-mobile-menu">
					<div className="mobileNavlogo-parent">
						<img src="/images/snowcones.avif" className="logo" />
					</div>
					<ul>
						<li><a href="/">Home</a></li>
						<li><a href="/menu">Menu</a></li>
						<li><a href="/cart">Cart</a></li>
						<li><a href="/contact">Contact</a></li>
						<li><a href="/locations">Locations</a></li>
						<li><a href="/about">About Us</a></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default MobileHamburgerNav;