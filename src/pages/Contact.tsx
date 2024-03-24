import { useState } from "react";
import sendEmail from "../api/mailApi";
import Toast from "../components/Toast";

import { Button, TextField } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import EmailIcon from "@mui/icons-material/Email";
import PhonelinkRingIcon from '@mui/icons-material/PhonelinkRing';
import ChatIcon from '@mui/icons-material/Chat';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from "@mui/icons-material/Send";

import "./Contact.scss";
import GoogleMap from "../components/GoogleMap";
import {useTranslation} from "react-i18next";

const Contact = () => {
	const { t } = useTranslation();

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
		if (response.status !== 201) {
			setSending(false);
		} else {
			setToast(true);
			setName("");
			setEmail("");
			setEmail2("");
			setText("");
			setSending(false);
		}
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
							label={t("contact.form.name.label")}
							placeholder={t("contact.form.name.placeholder")}
							value={name}
							onChange={(event) => setName(event.target.value)}
							error={name !== "" && name.length < 2}
						/>

						<TextField
							variant="outlined"
							color="secondary"
							required
							fullWidth
							label={t("contact.form.email.label")}
							placeholder={t("contact.form.email.placeholder")}
							value={email}
							onChange={(event) => setEmail(event.target.value)}
							error={email !== "" && !isEmail(email)}
						/>

						<TextField
							variant="outlined"
							color="secondary"
							required
							fullWidth
							label={t("contact.form.email2.label")}
							placeholder={t("contact.form.email2.placeholder")}
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
							label={t("contact.form.message.label")}
							placeholder={t("contact.form.message.placeholder")}
							value={text}
							onChange={(event) => setText(event.target.value)}
							error={text.length > 500}
							helperText={
								text.length <= 500
									? `${500 - text.length} ${t("contact.form.message.charsLeft")}`
									: t("contact.form.message.tooLong")
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
							{t("contact.form.submit")}
						</LoadingButton>
					</form>
					<div className="contact-btn-container">
						<Button
							variant="contained"
							color="secondary"
							size="large"
							startIcon={<PhonelinkRingIcon />}
							onClick={() =>
								window.open(
									"tel: +36 20 335 4460",
									"_blank"
								)
							}
						>
							+36 20 335 4460
						</Button>
						<Button
							variant="contained"
							color="secondary"
							size="large"
							startIcon={<EmailIcon />}
							onClick={() =>
								window.open(
									"mailto:hbmangalicafarm@gmail.com",
									"_blank"
								)
							}
						>
							hbmangalicafarm@gmail.com
						</Button>
						<Button
							variant="contained"
							color="secondary"
							size="large"
							startIcon={<EmailIcon />}
							onClick={() =>
								window.open(
									"mailto:info@hbmangalicafarm.hu",
									"_blank"
								)
							}
						>
							info@hbmangalicafarm.hu
						</Button>
						<Button
							variant="contained"
							color="secondary"
							size="large"
							startIcon={<ChatIcon />}
							onClick={() =>
								window.open(
									"https://www.messenger.com/t/hbmangalicafarm",
									"_blank"
								)
							}
						>
							Facebook Messenger
						</Button>
						<Button
							variant="contained"
							color="secondary"
							size="large"
							startIcon={<FacebookIcon />}
							onClick={() =>
								window.open(
									"https://www.facebook.com/hbmangalicafarm",
									"_blank"
								)
							}
						>
							facebook.com/hbmangalicafarm
						</Button>
						<Button
							variant="contained"
							color="secondary"
							size="large"
							startIcon={<InstagramIcon />}
							onClick={() =>
								window.open(
									"https://www.instagram.com/hbmangalicafarm",
									"_blank"
								)
							}
						>
							instagram.com/hbmangalicafarm
						</Button>

					</div>
				</div>
				<Toast
					open={toast}
					onClose={() => setToast(false)}
					message={t("contact.form.success")}
				/>
				<GoogleMap />
			</main>
		</>
	);
};

export default Contact;
