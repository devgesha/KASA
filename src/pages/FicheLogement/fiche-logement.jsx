import { useParams } from "react-router-dom";

import PageNoFound from "../PageNotFound/pagenotfound";

import Header from "../../components/Header/header";
import Carrousel from "../../components/Carrousel/carrousel";
import Rating from "../../components/Rating/rating";
import Host from "../../components/Host/host";
import Collapsible from "../../components/Collapse/collapse";
import Tags from "../../components/Tags/tags";
import Footer from "../../components/Footer/footer";

import logements from "../../assets/logements.json";

//style
import "./fiche-logement.css";

const FicheLogement = () => {
    const { logementId } = useParams();
    const logement = logements.find((logement) => logement.id === logementId);
    //const { title, location, rating, host, equipments, description, pictures } =
    //logement;
  
    return logement === undefined ? (
      <PageNoFound />
    ) : (
    <div className="fichelogement">
        <Header />
      <div className="bodylogement">
        <Carrousel slides={logement.pictures} />
        <div className="fichelogement__content">
          <div className="fichelogement__informations">
            <h1 className="fichelogement__title">{logement.title}</h1>
            <p className="fichelogement__location">{logement.location}</p>
            <div className="fichelogement__tags">
              {logement.tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>
          </div>
        <div className="ficheLogement__hosts-and-rating">
            <Host host={logement.host} />
            <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="ficheLogement__dropdowns">
        <Collapsible title="Description" width={"half"} content={logement.description} />
        <Collapsible title="Equipement" width={"half"} content={logement.equipments} />
      </div>
    </div>
    <Footer />
    </div>
    );  
};
  
export default FicheLogement;





