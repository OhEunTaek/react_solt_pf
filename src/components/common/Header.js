import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header({ type }) {
	const [toggle, setToggle] = useState(false);

	const clickedToggle = () => {
		setToggle((prev) => !prev);
	};

	const active = { color: 'orange' };

	return (
		<header className={type}>
			<div className='inner'>
				<h1>
					<NavLink exact to='/' className='logo'>
						(salt;)
					</NavLink>
				</h1>

				<ul id='gnb'>
					<li>
						<NavLink activeStyle={active} to='/rooms'>
							ROOMS
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/gallery'>
							GALLERY
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/youtube'>
							YOUTUBE
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/community'>
							COMMUNITY
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/location'>
							LOCATION
						</NavLink>
					</li>
					<li>
						<NavLink activeStyle={active} to='/join'>
							JOIN
						</NavLink>
					</li>
				</ul>

				<button
					className={`btnCall${toggle ? ' on' : ''}`}
					onClick={clickedToggle}>
					<span></span>
					<span></span>
					<span></span>
				</button>

				<nav className='menuMo'>
					<ul id='gnbMo'>
						<li>
							<NavLink activeStyle={active} to='/rooms'>
								ROOMS
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/gallery'>
								GALLERY
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/youtube'>
								YOUTUBE
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/community'>
								COMMUNITY
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/location'>
								LOCATION
							</NavLink>
						</li>
						<li>
							<NavLink activeStyle={active} to='/join'>
								JOIN
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
