import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

import "./NavLink.scss";

const NavLink = ({ id }: { id: string }) => {
	const { t } = useTranslation();

	return (
		<HashLink smooth to={`/#${id}`} className="nav-link">
			{t(`nav.${id}`)}
		</HashLink>
	);
};

export default NavLink;
