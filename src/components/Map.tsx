import "./Map.scss";

const Map = () => {
	return (
		<div id="google-map">
			<iframe
				title="google-maps"
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5353.019209760864!2d17.280193!3d47.86846000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b88180f525f5d%3A0x19c6075734d6aa6f!2zTW9zb25tYWd5YXLDs3bDoXIsIEtpc2VyZMWRIHUgOCwgOTIwMCBIdW5nYXJ5!5e0!3m2!1sen!2smt!4v1664488723790!5m2!1sen!2smt"
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

export default Map;
