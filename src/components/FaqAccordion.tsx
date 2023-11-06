import { useState } from "react";
import { useTranslation } from "react-i18next";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const FaqAccordion = ({name}: {name: string}) => {
	const [expanded, setExpanded] = useState<string | false>(false);
	const { t } = useTranslation();

	const expandPanel =
		(panel: string) =>
		(event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
        <Accordion
            expanded={expanded === name}
            onChange={expandPanel(name)}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                {t(`faq.${name}.title`)}
            </AccordionSummary>
            <AccordionDetails>
                {t(`faq.${name}.description`)}
            </AccordionDetails>
        </Accordion>
	);
};

export default FaqAccordion;
