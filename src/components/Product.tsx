import { useTranslation } from "react-i18next";

import Grid from "@mui/material/Grid";

import product1 from "../media/pic/Meatbox_sliced.jpg";
import product2 from "../media/pic/Toolbox.jpg";
import product3 from "../media/pic/Chopping_board.jpg";
import product4 from "../media/pic/Minibox.jpg";

const Product = ({
	openTab,
	index,
}: {
	index: number;
	openTab: number;
}) => {
	const { t } = useTranslation();
	const imageUrls = [product1, product2, product3, product4];

	return (
		<div
			role="tabpanel"
			className="tabpanel"
			hidden={openTab !== index}
			id={`tabpanel-${index}`}
		>
			<Grid container spacing={{ xs: 0 }}>
				<Grid item xs={12} sm={6} md={8} className={"product-details"}>
					<p>{t(`products.product${index + 1}.description`)}</p>
					<p className={"price"}>{t(`products.price`)} {t(`products.product${index + 1}.price`)}</p>


				</Grid>
				<Grid
					item
					xs={12}
					sm={6}
					md={4}
					className="img-container"
					style={{ backgroundImage: `url(${imageUrls[index]})`}}
				></Grid>
			</Grid>
		</div>
	);
};

export default Product;
