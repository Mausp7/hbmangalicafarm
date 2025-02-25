import { useState } from "react";
import { useTranslation } from "react-i18next";

import Grid from "@mui/material/Grid";
import FaqAccordion from "./FaqAccordion";

import "./Faq.scss";


const Faq = () => {
	const [expanded, setExpanded] = useState<string | false>(false);
	const { t } = useTranslation();

	const expandPanel =
		(panel: string) =>
		(event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<section id="faq">
			<h2>{t("faq.title")}</h2>
			<div className="accordion">
				{[0, 1, 2, 3, 4].map(n =>
										<FaqAccordion
											key={`faq${n}`}
											name={`faq${n}`}
											expanded={expanded === `faq${n}`}
											onChange={expandPanel(`faq${n}`)}
										/>
									)
				}
			</div>
		</section>
	);
};

export default Faq;
