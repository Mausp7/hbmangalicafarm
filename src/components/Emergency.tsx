import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import catAndDogLay from "../media/pic/cat-and-dog-lay.jpg";

import "./Emergency.scss";

const Emergency = () => {
	const { t } = useTranslation();

	return (
		<Grid item xs={12} lg={4}>
			<section id="emergency">
				<div className="text-container">
					<h2>{t("emergency.title")}</h2>
					{t("emergency.content")
						.split("\n")
						.map(t => (
							<p key={t}>{t}</p>
						))}
					<p>
						{t("emergency.linkDescription")}{" "}
						<Link
							href="https://maok.hu/allatorvosi_ugyeletek/gyor-sopron_megye_2"
							underline="hover"
							rel="noreferrer"
							target="_blank"
							sx={{ fontWeight: "600" }}
						>
							<span>{t("emergency.link")}</span>
							<OpenInNewIcon
								sx={{
									position: "relative",
									left: "5px",
									top: "5px",
									fontWeight: "600",
								}}
							/>
						</Link>
					</p>
				</div>
				<div
					className="img-container"
					style={{ backgroundImage: `url(${catAndDogLay})` }}
				></div>
			</section>
		</Grid>
	);
};

export default Emergency;
