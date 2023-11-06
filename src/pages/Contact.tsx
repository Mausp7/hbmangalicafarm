import { useState } from "react";
import sendEmail from "../api/sendInBlueApi";
import Toast from "../components/Toast";

import { Button, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SendIcon from "@mui/icons-material/Send";

import "./Contact.scss";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [email2, setEmail2] = useState("");
	const [text, setText] = useState("");

	const [sending, setSending] = useState(false);
	const [toast, setToast] = useState(false);

	const isEmail = (input: string) => {
		return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			input
		);
	};

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		setSending(true);
		const response = await sendEmail({ sender: name, address: email, text });
		if (response.status !== 201) return setSending(false);

		setName("");
		setEmail("");
		setEmail2("");
		setText("");
		setSending(false);
		setToast(true);
	};

	return (
		<>
			<main id="contact">
				<h2>
					Let's talk about our next adventure together over a coffee or tea!
				</h2>
				<p>
					You can leave a message or find me on the following platforms below.
				</p>
				<div className="contact-container">
					<form>
						<TextField
							variant="outlined"
							color="secondary"
							required
							fullWidth
							label="Name"
							placeholder="How should I call you?"
							value={name}
							onChange={(event) => setName(event.target.value)}
							error={name !== "" && name.length < 2}
						/>

						<TextField
							variant="outlined"
							color="secondary"
							required
							fullWidth
							label="E-mail"
							placeholder="example@email.com"
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							error={email !== "" && !isEmail(email)}
						/>

						<TextField
							variant="outlined"
							color="secondary"
							required
							fullWidth
							label="Confirm E-mail"
							placeholder="Must be the same as above."
							value={email2}
							onChange={(event) => setEmail2(event.target.value)}
							error={email2 !== "" && email !== email2}
						/>

						<TextField
							variant="outlined"
							multiline
							rows={6}
							fullWidth
							color="secondary"
							required
							label="Message"
							placeholder="Write your message here..."
							value={text}
							onChange={(event) => setText(event.target.value)}
							error={text.length > 500}
							helperText={
								text.length <= 500
									? `${500 - text.length} characters left.`
									: "Message too long."
							}
						/>

						<LoadingButton
							loadingPosition="end"
							variant="contained"
							color="primary"
							size="large"
							endIcon={<SendIcon />}
							onClick={(event) => handleSubmit(event)}
							disabled={
								name.length < 2 ||
								!isEmail(email) ||
								email2 !== email ||
								text.length < 3 ||
								text.length > 500
							}
							loading={sending}
						>
							Send
						</LoadingButton>
					</form>
					<div className="contact-btn-container">
						<Button
							variant="contained"
							color="secondary"
							size="large"
							startIcon={<LinkedInIcon />}
							onClick={() =>
								window.open(
									"https://www.linkedin.com/in/aron-tombacz/",
									"_blank"
								)
							}
						>
							LinkedIn
						</Button>

						<Button
							variant="contained"
							color="secondary"
							size="large"
							startIcon={<GitHubIcon />}
							onClick={() => window.open("https://github.com/Mausp7", "_blank")}
						>
							GitHub
						</Button>

						<a href="mailto:aron.tombacz@yahoo.com">
							<Button
								variant="contained"
								color="secondary"
								size="large"
								fullWidth
								startIcon={<EmailIcon />}
							>
								E-mail
							</Button>
						</a>
					</div>
				</div>
				<Toast
					open={toast}
					onClose={() => setToast(false)}
					message={"Thank you for your message. We'll get in touch shortly."}
				/>
			</main>
		</>
	);
};

export default Contact;
