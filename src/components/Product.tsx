import { useState } from "react";
import { useTranslation } from "react-i18next";

import Grid from "@mui/material/Grid";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import UnorderedList from "./UnorderedList";

import checkup from "../media/pic/checkup.webp";

const Product = ({
	openTab,
	index,
}: {
	index: number;
	openTab: number;
}) => {
	const { t } = useTranslation();

	return (
		<div
			role="tabpanel"
			className="tabpanel"
			hidden={openTab !== index}
			id={`tabpanel-${index}`}
		>
			<Grid container spacing={{ xs: 0 }}>
				<Grid item xs={12} sm={4}>
					<p>{t(`products.product${index + 1}.description`)}</p>
					<p>{t(`products.price`)} {t(`products.product${index + 1}.price`)}</p>


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

export default Product;
