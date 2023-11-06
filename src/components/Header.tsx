import { useTranslation } from "react-i18next";

import "./Header.scss";

const Header = () => {
	const { t } = useTranslation();

	return (
		<header id="header">
			<div>
				<h1>{t("header.title1")}</h1>
				<h2>{t("header.title2")}</h2>
				{t("header.description")
					.split("\n")
					.map(t => (
						<p key={t}>{t}</p>
					))
				}
			</div>
		</header>
	);
};

export default Header;
