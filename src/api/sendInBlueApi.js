import axios from 'axios';

const sendEmail = async (email) => {
    try {
        const response = await axios.post(
			`https://api.sendinblue.com/v3/smtp/email`, {
                sender: {
                    email: email.address,
                    name: email.sender
                },
                to: [
                    {
                        name:"Aron Tombacz",
                        email:"aron.tombacz@yahoo.com"
                    }
                ],
                subject: `New message on Portfolio Page from ${email.sender}`,
                htmlContent: `
                    <html>
                        <head></head>
                        <body>
                            <h1>New message from ${email.sender}</h1>
                            <p>${email.text}</p>
                        </body>
                    </html>
                `
            }, {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "api-key": process.env.REACT_APP_SENDBLUE_API_KEY
                }
			}
		);

        return response;

    } catch (error) {
        if (!error.response) return error;

        console.log(`E-mail not sent: ${error.response.data.message ? error.response.data.message : error.response.data}`);

        return error.response;
    };

};

export default sendEmail;