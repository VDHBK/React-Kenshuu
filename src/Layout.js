import React from "react";
import Image from "./Modules/Views/Image";
import Description from "./Modules/Views/Description";
import Article from "./Modules/Views/Article";
import List from "./Modules/Views/List";
import OrderList from "./Modules/Views/OrderList";
import Images from "./Modules/Views/Images";
import ArticleHeader from "./Modules/ArticleHeader";

function ComponentSelector(section, rootImgPath, index) {
  switch (section.type) {
    case "Image":
      return <Image key={index} rootImgPath={rootImgPath} data={section} />;
    case "Images":
      return <Images key={index} rootImgPath={rootImgPath} data={section} />;
    case "Description":
      return (
        <Description key={index} rootImgPath={rootImgPath} data={section} />
      );
    case "Article":
      return <Article key={index} rootImgPath={rootImgPath} data={section} />;
    case "List":
      return <List key={index} rootImgPath={rootImgPath} data={section} />;
    case "OrderList":
      return <OrderList key={index} rootImgPath={rootImgPath} data={section} />;
    default:
      return "";
  }
}

function Sections(props) {
  return (
    <section>
      {props.data.map((section, index) => {
        return ComponentSelector(section, props.rootImgPath, index);
      })}
    </section>
  );
}

const Layout = (props) => {
  console.log(props);
  if (!props.page) {
    return <div>Sorry, but page was not found</div>;
  }

  return (
    <React.Fragment>
      <article>
        <ArticleHeader
          data={props.page.header}
          rootImgPath={props.rootImgPath}
        />
        <Sections data={props.page.sections} rootImgPath={props.rootImgPath} />
      </article>
    </React.Fragment>
  );
};

export default Layout;
