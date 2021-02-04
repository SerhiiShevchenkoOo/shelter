import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	NavLink,
	useLocation,
} from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import headerStyle from '../stylesJs/style-header';
import useLockBodyScroll from '../utils/use-lock-body-scroll';

const links = [
	{
		title: 'About the shelter',
		path: '/shelter',
		id: 1,
	},
	{
		title: 'Our pets',
		path: '/shelter/our-pets',
		id: 2,
	},
	{
		title: 'Help the shelter',
		path: '/help',
		id: 3,
	},
	{
		title: 'Contacts',
		path: '/contacts',
		id: 4,
	},
];

function Nav(props) {
	const location = useLocation();
	useLockBodyScroll(props.burger);
	return (
		<nav
			className={`
		${headerStyle.nav}
      ${props.burger ? 'translate-x-0' : ' translate-x-full'}
		`}>
			<ul className={props.ul}>
				{links.map(link => (
					<li className={headerStyle.li} key={link.id}>
						{location.pathname == link.path ? (
							<div className={headerStyle.activeLink} />
						) : (
							''
						)}
						<NavLink
							exact
							to={{
								pathname: link.path,
							}}>
							{link.title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
}

function Header(props) {
	const [openBurger, setOpenBurger] = useState(false);
	const isNotMobile = useMediaQuery({ minWidth: 768 });

	return (
		<header className={props.st}>
			<div>
				<h1 className={props.h1}>Cozy House</h1>
				<p className={props.subtitle}>Shelter for pets in Boston</p>
			</div>

			{isNotMobile ? (
				<Nav ul={props.ul} />
			) : (
				<>
					<div
						onClick={() => {
							openBurger ? setOpenBurger(false) : setOpenBurger(true);
						}}
						className='relative z-30 w-16 h-12  transition-all duration-500 ease-in-out '>
						<span
							className={`absolute   top-0 ${
								openBurger && 'top-18p w-0 left-1/2'
							}`}></span>
						<span
							className={`absolute  top-18p ${
								openBurger && 'rotate-45'
							}`}></span>
						<span
							className={`absolute  top-18p ${
								openBurger && '-rotate-45'
							}`}></span>
						<span
							className={`absolute  top-36p ${
								openBurger && 'top-18p w-0 left-1/2'
							}`}></span>
					</div>
					<Nav burger={openBurger} media={isNotMobile} />
				</>
			)}
		</header>
	);
}
export default Header;
