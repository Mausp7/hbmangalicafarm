import { useTranslation } from "react-i18next";

import Grid from "@mui/material/Grid";

import UnorderedList from "./UnorderedList";

import petshop from "../media/pic/petshop.webp";

const PharmacyServices = ({
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
					<UnorderedList text={t("services.shop.content")} />
				</Grid>
				<Grid
					item
					xs={12}
					sm={8}
					className="img-container"
					style={{ backgroundImage: `url(${petshop})` }}
				></Grid>
			</Grid>
		</div>
	);
};

export default PharmacyServices;
