import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";


import "./TrackingDetails.scss";

interface TrackingDetailsProps {
	entry: {
		id: string,
		dateOfSlaughter: string,
		placeOfSlaughter: string,
		weight: string,
		age: string,
		amount: string,
		weightProPiece: string,
		bloodTestDate: string,
		bloodTestResult: string
	},
	onClick: () => void
}


const TrackingDetails = ({ entry, onClick }: TrackingDetailsProps) => {
	const { t } = useTranslation();

	return (
		<div key={entry.id} className="trackingDetails">
			<h3>{t("tracking.uniqueID")}: {entry?.id}</h3>
			<p>{t("tracking.date")}: {entry?.dateOfSlaughter}</p>
			<p>{t("tracking.place")}: {entry?.placeOfSlaughter}</p>
			<p>{t("tracking.weight")}: {entry?.weight} {t("tracking.weightUnit")}</p>
			<p>{t("tracking.age")}: {entry?.age} {t("tracking.ageUnit")}</p>
			<p>{t("tracking.slaughtered")}: {entry?.amount} {t("tracking.weightUnit")}, {entry.weightProPiece} {t("tracking.weightUnit")}</p>
			<p>{t("tracking.bloodTestDate")}: {entry?.bloodTestDate}</p>
			<p>{t("tracking.bloodTestResult")}: {entry?.bloodTestResult}</p>
			<a href={`../assets/docs/${entry?.id}.pdf`}  target="blank">
				<Button variant="contained" style={{margin: "30px 0px"}}>{t("tracking.open")}</Button>
			</a>
			<Button variant="outlined" style={{margin: "30px 30px"}} onClick={onClick}>{t("tracking.close")}</Button>
		</div>
	)
};

export default TrackingDetails;
