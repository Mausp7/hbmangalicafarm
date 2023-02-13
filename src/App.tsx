import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import theme from "./style/theme";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/impressum" element={<Impressum />} />
				</Routes>

				<Footer />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
