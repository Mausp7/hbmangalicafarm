import { useState } from "react";
import { useTranslation } from "react-i18next";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import Product from "./Product";
import "./Products.scss";

const Products = () => {
	const [openTab, setOpenTab] = useState(0);
	const { t } = useTranslation();

	const switchTab = (event: React.SyntheticEvent, newValue: number) => {
		setOpenTab(newValue);
	};

	return (
		<section id="products">
			<h2>{t("products.title")}</h2>
			<Box className="tab-container" sx={{ width: "100%" }}>
				<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
					<Tabs
						value={openTab}
						onChange={switchTab}
						variant="fullWidth"
					>
						<Tab label={t("products.product1.title")} wrapped />
						<Tab label={t("products.product2.title")} wrapped />
						<Tab label={t("products.product3.title")} wrapped />
						<Tab label={t("products.product4.title")} wrapped />
					</Tabs>
				</Box>
				<Product openTab={openTab} index={0} />
				<Product openTab={openTab} index={1} />
				<Product openTab={openTab} index={2} />
				<Product openTab={openTab} index={3} />
			</Box>
		</section>
	);
};

export default Products;
