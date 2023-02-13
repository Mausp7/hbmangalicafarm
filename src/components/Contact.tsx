import { useTranslation } from "react-i18next";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";

import "./Contact.scss";

const Contact = () => {
	const { t } = useTranslation();

	return (
		<Grid item xs={12} sm={6} lg={4}>
			<section id="contact" className="info-container">
				<h2>{t("contact.title")}</h2>
				<Grid container rowSpacing={4} columnSpacing={0}>
					<Grid item xs={3}>
						<h4>{t("contact.adress")}:</h4>
					</Grid>
					<Grid item xs={9}>
						<p>{t("contact.addressCity")}</p>
						<p>{t("contact.addressStreet")}</p>
					</Grid>

					<Grid item xs={3}>
						<h4>{t("contact.phone")}:</h4>
					</Grid>
					<Grid item xs={9}>
						<p>
							{t("contact.phoneLandline")}:<br />
							<Link href="tel:+3696207429" underline="hover">
								(+36-96) 207-429
							</Link>
						</p>
						<p>
							{t("contact.phoneCell")}:<br />
							<Link href="tel:+36309276518" underline="hover">
								(+36-30) 927-6518
							</Link>
						</p>
					</Grid>

					<Grid item xs={3}>
						<h4>E-mail:</h4>
					</Grid>
					<Grid item xs={9}>
						<p>
							<Link
								href="mailto:rexob@freemail.hu"
								underline="hover"
								rel="noreferrer"
							>
								rexob@freemail.hu
							</Link>
						</p>
						<p>
							<Link
								href="mailto:nandr@szurkepuli.hu"
								underline="hover"
								rel="noreferrer"
							>
								nandr@szurkepuli.hu
							</Link>
						</p>
					</Grid>

					<Grid item xs={3}>
						<h4>GPS:</h4>
					</Grid>
					<Grid item xs={9}>
						<p>
							<Link
								href="https://goo.gl/maps/r6NfiJcGVEhqk11s8"
								underline="hover"
								target="_blank"
								rel="noreferrer"
							>
								47.868193, 17.280434
							</Link>
						</p>
					</Grid>
				</Grid>
			</section>
		</Grid>
	);
};

export default Contact;
