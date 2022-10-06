import "./styles/styles.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import Services from "./pages/services/Services";
import AboutUsPage from "./pages/aboutUs/AboutUsPage";
import Contact from "./pages/contact/Contact";
import Admin from "./pages/admin/Admin";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="services" element={<Services />} />
                <Route path="aboutUs" element={<AboutUsPage />} />
                <Route path="contact" element={<Contact />} />
            </Route>
            <Route path="/admin" element={<Admin />} />
        </Routes>
    );
}

export default App;
