import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

import Link from "@mui/material/Link";
import { Button } from "@mui/material";

import "./Footer.scss";

const Footer = () => {
	const { t } = useTranslation();

	const date = new Date(Date.now());

	return (
		<footer id="footer">
			<Link
				href="http://arontombacz.fejlessz.hu"
				underline="hover"
				rel="noreferrer"
				target="_blank"
				color="primary"
			>
				© {date.getFullYear()} - AT Webdesign
			</Link>
			<HashLink smooth to="/impressum#impressum">
				<Button
					variant="text"
					size="small"
					color="primary"
					sx={{ fontSize: "18px" }}
				>
					{t("impressum.title")}
				</Button>
			</HashLink>
		</footer>
	);
};

export default Footer;
