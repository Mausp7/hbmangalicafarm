import axios from 'axios';

const sendEmail = async (email: {address: string, sender: string, text: string }) => {
    try {
        const data = {
            sender: {
                email: email.address,
                name: email.sender
            },
            to: [
                {
                    name:"HB MangalicaFarm",
                    email:"mausp7@yahoo.com"
                    // email:"info@hbmangalicafarm.hu"
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
        };

        const config = {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "api-key": process.env.REACT_APP_SENDBLUE_API_KEY
            }
        };
        // console.log(data)
        // return {status: 201}

        // return await axios.post(`https://api.sendinblue.com/v3/smtp/email`, data, config);


    } catch (error: any) {
        if (!error.response) return error;

        console.log(`E-mail not sent: ${error.response.data.message ? error.response.data.message : error.response.data}`);

        return error.response;
    }

};

export default sendEmail;




