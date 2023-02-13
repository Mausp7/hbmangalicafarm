import { useTranslation } from "react-i18next";

import "./Header.scss";
import puli from "../media/pic/szurkepuli.webp";

const Header = () => {
	const { t } = useTranslation();

	return (
		<header id="header">
			<img src={puli} alt="szürke puli" />
			<div>
				<h1>{t("header.title")}</h1>
				<h2>{t("header.description")}</h2>
			</div>
		</header>
	);
};

export default Header;
