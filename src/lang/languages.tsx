import flagHU from "../media/pic/lang/magyar.jpg";
import flagEN from "../media/pic/lang/english.jpg";
import flagDE from "../media/pic/lang/deutsch.jpg";

interface LanguagesInterface {
	code: string;
	name: string;
	country_code: string;
	flag: string;
}

const languages: LanguagesInterface[] = [
	{
		code: "hu",
		name: "Magyar",
		country_code: "HU",
		flag: flagHU,
	},
	{
		code: "en",
		name: "English",
		country_code: "EN",
		flag: flagEN,
	},
	{
		code: "de",
		name: "Deutsch",
		country_code: "DE",
		flag: flagDE,
	},
];

export default languages;
