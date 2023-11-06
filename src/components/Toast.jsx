import Snackbar from "@mui/material/Snackbar";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Toast = ({ open, onClose, message }) => {
	return (
		<Snackbar
			open={open}
			autoHideDuration={6000}
			onClose={onClose}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
		>
			<Alert
				onClose={onClose}
				severity="success"
				variant="filled"
				color="secondary"
				sx={{ width: "100%" }}
			>
				<AlertTitle>Success!</AlertTitle>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default Toast;
