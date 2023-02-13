import { useState } from "react";
import { useTranslation } from "react-i18next";

import Grid from "@mui/material/Grid";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import UnorderedList from "./UnorderedList";

import checkup from "../media/pic/checkup.webp";

const VeterinaryServices = ({
	openTab,
	index,
}: {
	index: number;
	openTab: number;
}) => {
	const [expanded, setExpanded] = useState<string | false>(false);
	const { t } = useTranslation();

	const expandPanel =
		(panel: string) =>
		(event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<div
			role="tabpanel"
			className="tabpanel"
			hidden={openTab !== index}
			id={`tabpanel-${index}`}
		>
			<Grid container spacing={{ xs: 0 }}>
				<Grid item xs={12} sm={4}>
					<Accordion
						expanded={expanded === "checkup"}
						onChange={expandPanel("checkup")}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							id="checkup-header"
						>
							{t("services.veterinary.checkup.title")}
						</AccordionSummary>
						<AccordionDetails>
							<UnorderedList
								text={t("services.veterinary.checkup.content")}
							/>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === "surgery"}
						onChange={expandPanel("surgery")}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							id="surgery-header"
						>
							{t("services.veterinary.surgery.title")}
						</AccordionSummary>
						<AccordionDetails>
							<UnorderedList
								text={t("services.veterinary.surgery.content")}
							/>
						</AccordionDetails>
					</Accordion>
					<UnorderedList text={t("services.veterinary.content")} />
				</Grid>
				<Grid
					item
					xs={12}
					sm={8}
					className="img-container"
					style={{ backgroundImage: `url(${checkup})` }}
				></Grid>
			</Grid>
		</div>
	);
};

export default VeterinaryServices;
