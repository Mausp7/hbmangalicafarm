import { useState } from "react";
import { useTranslation } from "react-i18next";

import Grid from "@mui/material/Grid";
import FaqAccordion from "./FaqAccordion";


const Faq = () => {
	const [expanded, setExpanded] = useState<string | false>(false);
	const { t } = useTranslation();

	const expandPanel =
		(panel: string) =>
		(event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<div id="faq"
		>
			<h2>{t("faq.title")}</h2>

			<Grid container spacing={{ xs: 0 }}>
				<Grid item xs={12} sm={4}>
					{[0, 1, 2, 3, 4].map(n => <FaqAccordion key={`faq${n}`} name={`faq${n}`} />)}
				</Grid>
			</Grid>
		</div>
	);
};

export default Faq;
