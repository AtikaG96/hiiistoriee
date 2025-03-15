import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AndreVerdenskrig from "./pages/AndreVerdenskrig";
import Atombombene from "./pages/Atombombene";
import Holocaust from "./pages/Holocaust";
import Dampmaskinen from "./pages/Dampmaskinen";
import DenIndustrielleRevolusjon from "./pages/DenIndustrielleRevolusjon";
import Urbanisering from "./pages/Urbanisering";
import Atomkapplopet from "./pages/Atomkapplopet";
import Berlinmuren from "./pages/Berlinmuren";
import DenKaldeKrigen from "./pages/DenKaldeKrigen";
import Kubakrisen from "./pages/Kubakrisen";
import Romkapplopet from "./pages/Romkapplopet";
import ForsteVerdenskrig from "./pages/ForsteVerdenskrig";
import Skyttergravskrigen from "./pages/Skyttergravskrigen";
import VerdensomspennendeKonflikt from "./pages/VerdensomspennendeKonflikt";
import Feudalisme from "./pages/Feudalisme";
import GotiskArkitektur from "./pages/GotiskArkitektur";
import Korstogene from "./pages/Korstogene";
import Middelalderen from "./pages/Middelalderen";
import Svartedauden from "./pages/Svartedauden";
import Geopolitikk from "./pages/Geopolitikk";
import Globalisering from "./pages/Globalisering";
import ModerneHistorie from "./pages/ModerneHistorie";
import Teknologi from "./pages/Teknologi";
import Egypt from "./pages/Egypt";
import Hellas from "./pages/Hellas";
import Mesopotamia from "./pages/Mesopotamia";
import Romerriket from "./pages/Romerriket";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/andre-verdenskrig" element={<AndreVerdenskrig />} />
        <Route path="/atombombene" element={<Atombombene />} />
        <Route path="/holocaust" element={<Holocaust />} />
        <Route path="/dampmaskinen" element={<Dampmaskinen />} />
        <Route path="/den-industrielle-revolusjon" element={<DenIndustrielleRevolusjon />} />
        <Route path="/urbanisering" element={<Urbanisering />} />
        <Route path="/atomkapplopet" element={<Atomkapplopet />} />
        <Route path="/berlinmuren" element={<Berlinmuren />} />
        <Route path="/den-kalde-krigen" element={<DenKaldeKrigen />} />
        <Route path="/kubakrisen" element={<Kubakrisen />} />
        <Route path="/romkapplopet" element={<Romkapplopet />} />
        <Route path="/forste-verdenskrig" element={<ForsteVerdenskrig />} />
        <Route path="/skyttergravskrigen" element={<Skyttergravskrigen />} />
        <Route path="/verdensomspennende-konflikt" element={<VerdensomspennendeKonflikt />} />
        <Route path="/feudalisme" element={<Feudalisme />} />
        <Route path="/gotisk-arkitektur" element={<GotiskArkitektur />} />
        <Route path="/korstogene" element={<Korstogene />} />
        <Route path="/middelalderen" element={<Middelalderen />} />
        <Route path="/svartedauden" element={<Svartedauden />} />
        <Route path="/geopolitikk" element={<Geopolitikk />} />
        <Route path="/globalisering" element={<Globalisering />} />
        <Route path="/moderne-historie" element={<ModerneHistorie />} />
        <Route path="/teknologi" element={<Teknologi />} />
        <Route path="/egypt" element={<Egypt />} />
        <Route path="/hellas" element={<Hellas />} />
        <Route path="/mesopotamia" element={<Mesopotamia />} />
        <Route path="/romerriket" element={<Romerriket />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
