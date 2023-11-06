import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "rgb(59, 39, 29)",
		},
		secondary: {
			main: "rgb(157, 177, 186)",
		},
		error: {
			main: "rgb(220, 40, 40)",
		},
		info: {
			main: "#effffd",
		},
	},
});

export default theme;
