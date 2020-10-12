import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";

import AllFood from "./AllFood";
import Tohe from "../Pages/Food/Tohe";
import Bunbohue from "../Pages/Food/Bunbohue";
import Banhcay from "../Pages/Food/Banhcay";

import AllPlaces from "./AllPlaces";
import Catba from "../Pages/Places/Catba";
import Sapa from "../Pages/Places/Sapa";
import Sondoong from "../Pages/Places/Sondoong";
import Vinpearlnhatrang from "../Pages/Places/Vinpearlnhatrang";

import { AllFoodJSON } from "../Data/Food/AllFood";
import { AllPlacesJSON } from "../Data/Places/AllPlaces";

const AllRouters = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/food"
          render={(props) => <AllFood {...props} data={AllFoodJSON} />}
        />
        <Route path="/food/tohe" component={Tohe} />
        <Route path="/food/bunbohue" component={Bunbohue} />
        <Route path="/food/banhcay" component={Banhcay} />
        <Route
          exact
          path="/place"
          render={(props) => <AllPlaces {...props} data={AllPlacesJSON} />}
        />
        <Route path="/place/catba" component={Catba} />
        <Route path="/place/sapa" component={Sapa} />
        <Route path="/place/sondoong" component={Sondoong} />
        <Route
         path="/place/vinpearlnhatrang"
          component={Vinpearlnhatrang}
        />
      </Switch>
    </React.Fragment>
  );
};

export default AllRouters;