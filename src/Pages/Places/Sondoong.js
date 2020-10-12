import Layout from "../../Layout";
import SondoongJSON from "../../Data/Places/Sondoong";

const Sondoong = (props) => {
  return Layout({
    page: SondoongJSON,
    rootImgPath: "Img/Places/Sondoong/",
  });
};

export default Sondoong;
