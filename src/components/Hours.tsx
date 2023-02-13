import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";

import "./Hours.scss";

const Hours = () => {
	const { t } = useTranslation();

	return (
		<Grid item xs={12} sm={6} lg={4}>
			<section id="hours" className="info-container">
				<h2>{t("hours.title")}</h2>

				<Grid container rowSpacing={4} columnSpacing={0}>
					<Grid item xs={6}>
						<h4>
							{t("hours.monday")} - {t("hours.friday")}:
						</h4>
					</Grid>

					<Grid item xs={6}>
						<p>9:00 - 11:30</p>
						<p>14:00 - 17:00</p>
					</Grid>

					<Grid item xs={6}>
						<h4>{t("hours.saturday")}:</h4>
					</Grid>

					<Grid item xs={6}>
						<p>9:00 - 12:00</p>
					</Grid>

					<Grid item xs={6}>
						<h4>{t("hours.surgery")}:</h4>
					</Grid>

					<Grid item xs={6}>
						<p>{t("hours.weekdays")}:</p>
						<p> 11:30 - 14:00</p>
					</Grid>
				</Grid>

				<p className="check-in">{t("hours.appointments")}</p>
			</section>
		</Grid>
	);
};

export default Hours;
