import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SlideshowGallery from "../Modules/slideshow-gallery/slideshow-gallery";

import hanoi from "../Img/Collection/hanoi.jpg";
import halong from "../Img/Collection/halong.jpg";
import hue from "../Img/Collection/hue.jpg";
import hoian from "../Img/Collection/hoian.jpg";
import dalat from "../Img/Collection/dalat.jpg";
import hcm from "../Img/Collection/hcm.jpg";

const collection = [
  { src: hanoi, caption: "ハノイ" },
  { src: halong, caption: "ハロン湾" },
  { src: hue, caption: "フェ" },
  { src: hoian, caption: "ホイアン" },
  { src: dalat, caption: "ダラット" },
  { src: hcm, caption: "ホチミン市" },
];
// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles(() => ({
  root: {},
}));

const Home = () => {
  return (
    <React.Fragment>
      <SlideshowGallery input={collection} ratio={`3:2`} mode={`manual`} />

    </React.Fragment>
  );
};

export default Home;
