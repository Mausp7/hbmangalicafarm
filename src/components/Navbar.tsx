import { useState } from "react";

import { HashLink } from "react-router-hash-link";
import NavLink from "./NavLink";

import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import SelectLang from "./SelectLang";
import languages from "../lang/languages";

import logo from "../media/pic/szurkepuli-logo.png";
import "./Navbar.scss";

const Navbar = () => {
	const [menuOn, setMenuOn] = useState(false);

	return (
		<nav>
			<div
				className={menuOn ? "nav-bar nav-bar-on" : "nav-bar"}
				onClick={() => setMenuOn(false)}
			>
				<HashLink smooth to="/#header">
					<div className="nav-header">
						<img
							src={logo}
							alt="szürke puli logo"
							className="logo"
						></img>
						<h2>Szürke Puli</h2>
					</div>
				</HashLink>

				<NavLink id="about" />
				<NavLink id="services" />
				<NavLink id="emergency" />
				<NavLink id="hours" />
				<NavLink id="contact" />

				<SelectLang setMenuOn={setMenuOn} languages={languages} />
			</div>
			<Button
				id="toggle-btn"
				variant="text"
				color="primary"
				size="small"
				sx={{
					fontSize: "40px",
				}}
				onClick={() => setMenuOn(prev => !prev)}
			>
				{menuOn ? (
					<MenuOpenIcon sx={{ fontSize: "inherit" }} />
				) : (
					<MenuIcon sx={{ fontSize: "inherit" }} />
				)}
			</Button>
		</nav>
	);
};

export default Navbar;
