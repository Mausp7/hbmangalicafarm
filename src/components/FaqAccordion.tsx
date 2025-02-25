import React from "react";
import { useTranslation } from "react-i18next";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const FaqAccordion = ({name, expanded, onChange}: {name: string, expanded: boolean, onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void}) => {
	const { t } = useTranslation();

	return (
        <Accordion
            expanded={expanded}
            onChange={onChange}
			className={"accordion-item"}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
            >
                {t(`faq.${name}.title`)}
            </AccordionSummary>
            <AccordionDetails sx={{background: "white", "font-size": "0.9em", "text-align": "justify"}}>
                {t(`faq.${name}.description`)}
            </AccordionDetails>
        </Accordion>
	);
};

export default FaqAccordion;
