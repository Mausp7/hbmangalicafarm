import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@mui/material";

import "./InfoBoard.scss";

const InfoBoard = () => {
	const [infoOn, setInfoOn] = useState(false)

	const { t } = useTranslation();

	const infoClosed = sessionStorage.getItem("infoClosed")

	useEffect(() => {
		let popUp: NodeJS.Timeout | undefined;

		if (!infoClosed) {
			popUp = setTimeout(() => {setInfoOn(true)}, 3*1000)
		}

	  return () => {
		clearTimeout(popUp);
	  }
	
	}, [infoClosed])
	


	const handleClose = () =>{
		setInfoOn(false)
		sessionStorage.setItem("infoClosed", "true")
	}

	return (<>
		{infoOn &&
			<section id="info-board" >
				<h3>{t("info.title")}</h3>
				{t("info.content").split(" \n ").map(text => <p key={text.slice(0, 25)}>{text}</p>)}
				<Button
				variant="contained"
				color="secondary"
				size="medium"
				sx={{
					fontSize: "18px",
				}}
				onClick={handleClose}
			>{t("info.close")}
			</Button>

			</section>
		}
	</>


	);
};

export default InfoBoard;
