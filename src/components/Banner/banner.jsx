
import background from "../../assets/imagebanner.png";
import descript from "../../assets/descriptionKasa.json";

// style 
import styles from "./banner.module.css";
import "./banner.css"

const slogan = descript.slogan;

function Banner () {
  return (
  <div className="banner">
    <article className={styles.article}>
      
        <img className="banner__img" src={background} alt="background" />
      
      <h1 className={styles.banner}>{slogan}</h1>
    </article>
    </div>
  );
}

export default Banner;




