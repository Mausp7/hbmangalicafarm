import { useState } from "react";

import i18next from "i18next";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import LanguageIcon from "@mui/icons-material/Language";

import "./SelectLang.scss";

interface SelectLangProps {
	languages: {
		code: string;
		name: string;
		country_code: string;
		flag: string;
	}[];
	setMenuOn: Function;
}

const SelectLang = ({ languages, setMenuOn }: SelectLangProps) => {
	const [lang, setLang] = useState(
		localStorage.getItem("i18nextLng") || "hu"
	);

	const langChange = (e: { target: { value: string } }) => {
		i18next.changeLanguage(e.target.value);
		sessionStorage.removeItem("infoClosed");
		setLang(e.target.value);
		setMenuOn(false);
	};

	return (
		<div className="language-select-container">
			<LanguageIcon color="primary" sx={{ marginRight: "7px" }} />
			<Select
				value={lang}
				variant="outlined"
				size="small"
				onChange={e => langChange(e)}
				color="info"
				className="select-lang"
			>
				{languages.map(({ code, name, flag }) => (
					<MenuItem key={code} value={code}>
						<div className="menu-item">
							<img
								src={flag}
								alt={`${name} flag`}
								className="flag"
							/>
							<p>{name}</p>
						</div>
					</MenuItem>
				))}
			</Select>
		</div>
	);
};

export default SelectLang;
