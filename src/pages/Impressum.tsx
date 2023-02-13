import { useTranslation } from "react-i18next";
import { HashLink } from "react-router-hash-link";

import { Button } from "@mui/material";

import "./Impressum.scss";

const Impressum = () => {
	const { t } = useTranslation();

	return (
		<div id="impressum">
			<div className="text-container">
				<h4>{t("impressum.title")}</h4>
				{t("impressum.content")
					.split(" \n ")
					.map(t => (
						<p>{t}</p>
					))}
				<HashLink smooth to="/">
					<Button
						variant="outlined"
						size="medium"
						color="primary"
						sx={{ fontSize: "18px" }}
					>
						{t("impressum.back")}
					</Button>
				</HashLink>
			</div>
		</div>
	);
};

export default Impressum;
