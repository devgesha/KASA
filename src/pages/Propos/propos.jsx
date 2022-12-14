
import Header from "../../components/Header/header";

import Collapsible from "../../components/Collapse/collapse";
import Footer from "../../components/Footer/footer";
import proposDescript from "../../assets/descriptionKasa.json";

//style
import "./propos.css";
import imagePropos from "../../assets/imagepropos.png";


const fiability = proposDescript.fiability;
const respect = proposDescript.respect;
const service = proposDescript.service;
const security = proposDescript.security;


const Propos = () => {
    
  
    return (
    <div className="pageabout">
      <Header />
      <img src={imagePropos} alt="" className="imagePropos" />
      
        
        
      <div className="propos__dropdowns">
        <Collapsible title="Fiabilité" width={"full"} content={fiability} />
        <Collapsible title="Respect" width={"full"} content={respect} />
        <Collapsible title="Service" width={"full"} content={service} />
        <Collapsible title="Sécurité" width={"full"} content={security} />
      </div>
    
    <Footer />
    </div>
    );
};

export default Propos




  
