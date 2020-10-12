import Layout from "../../Layout";
import BanhcayJSON from "../../Data/Food/Banhcay";

const Banhcay = (props) => {
  return Layout({ page: BanhcayJSON, rootImgPath: "Img/Food/Banhcay/" });
};

export default Banhcay;
