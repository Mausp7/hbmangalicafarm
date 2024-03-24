import {useEffect, useState} from "react";
import { Button, TextField } from "@mui/material";

import "./Tracking.scss";
import {useTranslation} from "react-i18next";

const Tracking = () => {
	const { t } = useTranslation();

	const [trackingData, setTrackingData] = useState([]);
	const [searchID, setSearchID] = useState("");
	const [trackingID, setTrackingID] = useState(0);

	const getData=()=>{
		fetch('assets/trackingIDs.json'
			,{
				headers : {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}
			}
		)
			.then(function(response){
				return response.json();
			})
			.then(function(data) {
				setTrackingData(data)
			});
	}
	useEffect(()=>{
		getData()
	},[])


	return (
		<main id="tracking">
			<div>

			<h2>
				{t("tracking.title")}
			</h2>
			<p>
				{t("tracking.description")}
			</p>
				<p>Gyártó: Hornyák Tamás kistermelő / 3923 Újharangod, Béke utca 15. / Eng.sz.: 04-03-T-1368 Tel.: +36 20 441 71 60</p>
			</div>
			<div className="tracking-container">
				<form>
					<TextField
						variant="outlined"
						color="secondary"
						required
						fullWidth
						label={t("tracking.search.label")}
						placeholder={t("tracking.search.placeholder")}
						value={searchID}
						onChange={(event) => setSearchID(event.target.value)}
						error={(!Number(searchID) && searchID.length !== 0) || searchID.length > 10}
						helperText={(searchID.length !== 0 && !Number(searchID)) || searchID.length > 10 ? t("tracking.filter.error") : ""}
					/>
				</form>
			</div>
			<section id={"tracking-panel"}>
				{trackingData.length > 0 ?
					<div>
						<h3>{t("tracking.uniqueIDs")}</h3>
						<ul>
							{trackingData.map(entry => entry?.id)
								.sort((a, b) => a < b ? a : b)
								.filter(id => String(id).includes(searchID))
								.map((id) =>
									<li key={id}>
										<Button onClick={() => setTrackingID(id)}>{id}</Button>
									</li>)}
						</ul>
					</div>
					:
					<p>{t("tracking.loading")}</p>
				}

				{trackingData.length > 0 &&
					<div>
						{trackingData.filter(entry => entry.id === trackingID).map((entry) =>
							<div key={entry.id}>
								<h3>{t("tracking.uniqueID")} {entry?.id}</h3>
								<p>{t("tracking.date")}: {entry?.dateOfSlaughter}</p>
								<p>{t("tracking.place")}: {entry?.placeOfSlaughter}</p>
								<p>{t("tracking.weight")}: {entry?.weight} {t("tracking.weightUnit")}</p>
								<p>{t("tracking.age")}: {entry?.age} {t("tracking.ageUnit")}</p>
								<p>{t("tracking.slaughtered")}: {entry?.amount} {t("tracking.weightUnit")}, {entry.weightProPiece} {t("tracking.weightUnit")}</p>
								<p>{t("tracking.bloodTestDate")}: {entry?.bloodTestDate}</p>
								<p>{t("tracking.bloodTestResult")}: {entry?.bloodTestResult}</p>
								<a href={`../assets/docs/${entry?.id}.pdf`}  target="blank"><Button >{t("tracking.open")}</Button></a>
								<br/>
								<Button onClick={() => setTrackingID(0)}>{t("tracking.close")}</Button>
							</div>
						)}
					</div>
				}
			</section>
		</main>
	);
};

export default Tracking;
