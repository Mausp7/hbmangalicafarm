import "./GoogleMap.scss";

const GoogleMap = () => {
	return (
		<div id="google-map">
			<iframe
				title="google-maps"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42624.39073739783!2d21.025472764137017!3d48.109764620060574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473f577b4c1991ff%3A0xb8c292b0bc629f87!2sGesztely%2C%20B%C3%A9ke%20u.%2013%2C%203923!5e0!3m2!1sen!2shu!4v1699287860301!5m2!1sen!2shu"
				width="100%"
				height="250"
				style={{ border: "0" }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</div>
	);
};

export default GoogleMap;
