import { useState } from "react";
import { useTranslation } from "react-i18next";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import VeterinaryServices from "./VeterinaryServices";
import PharmacyServices from "./PharmacyServices";
import PetShopServices from "./PetShopServices";

import "./Services.scss";

const Services = () => {
	const [openTab, setOpenTab] = useState(0);
	const { t } = useTranslation();

	const switchTab = (event: React.SyntheticEvent, newValue: number) => {
		setOpenTab(newValue);
	};

	return (
		<section id="services">
			<h2>{t("services.title")}</h2>
			<Box className="tab-container" sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={openTab}
						onChange={switchTab}
						variant="fullWidth"
					>
						<Tab label={t("services.veterinary.title")} wrapped />
						<Tab label={t("services.pharmacy.title")} wrapped />
						<Tab label={t("services.shop.title")} wrapped />
					</Tabs>
				</Box>
				<VeterinaryServices openTab={openTab} index={0} />
				<PharmacyServices openTab={openTab} index={1} />
				<PetShopServices openTab={openTab} index={2} />
			</Box>
		</section>
	);
};

export default Services;
