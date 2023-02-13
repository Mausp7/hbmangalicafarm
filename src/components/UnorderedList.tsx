import { useTranslation } from "react-i18next";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import CircleIcon from "@mui/icons-material/Circle";

const UnorderedList = ({ text }: { text: string }) => {
	const { t } = useTranslation();

	return (
		<List>
			{t(text)
				.split("\n")
				.map(t => (
					<ListItem
						key={t}
						className="list-item"
						sx={{
							backgroundColor: "#fff",
							marginBottom: "1px",
							borderRadius: "3px",
							boxShadow:
								"rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
						}}
					>
						<CircleIcon
							className="list-icon"
							color="primary"
							sx={{ width: "20px", fontSize: "6px" }}
						/>
						<ListItemText primary={t} />
					</ListItem>
				))}
		</List>
	);
};

export default UnorderedList;
