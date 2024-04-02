import {useEffect, useState} from "react";
import { Button, TextField } from "@mui/material";
import TrackingDetails from "../components/TrackingDetails";

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
			<section className="intro">
				<h2>
					{t("tracking.title")}
				</h2>
				<p>
					{t("tracking.description")}
				</p>
				<p>
					Gyártó: Hornyák Tamás kistermelő <br /> 3923 Újharangod, Béke utca 15. <br /> Eng.sz.: 04-03-T-1368 <br /> Tel.: +36 20 441 71 60
				</p>
			</section>

			<section id={"trackingPanel"}>
				{trackingData.length > 0 ? 
					<div className="trackingSelection">
						<h3>{t("tracking.uniqueIDs")}:</h3>
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

						<ul>
							{trackingData.map(entry => entry?.id)
								.sort((a, b) => a < b ? a : b)
								.filter(id => String(id).includes(searchID))
								.map((id) =>
									<li key={id}>
										<Button variant={id === trackingID ? "contained": "outlined"} style={{margin: "5px 0px"}} fullWidth={true} onClick={() => setTrackingID(id)}>{id}</Button>
									</li>)}
						</ul>
					</div>
					:
					<p>{t("tracking.loading")}</p>
				}

				{trackingData.filter(entry => entry.id === trackingID).map((entry) =>
					<TrackingDetails key={entry.id} entry={entry} onClick={() => setTrackingID(0)}></TrackingDetails>
				)}
			</section>
		</main>
	);
};

export default Tracking;
