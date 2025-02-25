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

				<h5>{t("impressum.header1")}</h5>
				<p>{t("impressum.name")}
					<br/>
					{t("impressum.address")}
					<br/>
					{t("impressum.tax")}
					<br/>
					{t("impressum.licence")}
					<br/>
					{t("impressum.phone")}
					<br/>
					{t("impressum.email")}
					<br/>
					{t("impressum.website")}
				</p>

				<h5>{t("impressum.header2")}</h5>
				<p>{t("impressum.description2")}</p>

				<h5>{t("impressum.header3")}</h5>
				<p>{t("impressum.description3")}</p>

				<h5>{t("impressum.header4")}</h5>
				<p>{t("impressum.description4")}</p>

				<h5>{t("impressum.header5")}</h5>
				<p>{t("impressum.description5")}
					<a target="_blank" rel="noreferrer" href="https://www.nethely.hu/files/C-Host_kft_adatvedelmi_es_adatkezelesi_szabalyzat.pdf">
						<Button
							variant="text"
							size="small"
							color="primary"
							sx={{ fontSize: "18px" }}
						>
							{t("impressum.link")}
						</Button>
					</a>
				</p>

				<HashLink smooth to="/#header">
					<Button
						variant="contained"
						size="medium"
						color="primary"
						fullWidth={true}
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
