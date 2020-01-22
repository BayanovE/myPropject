import React from "react";

import Component from "./component";
import DefaultTemplate from "./../../components/templates/DefaultTemplate";
import CompetitorsLoader from "../../loaders/CompetitorsLoader";
import CitiesLoader from "../../loaders/CitiesLoader";

function Competitors(props) {
    return(
        
        <DefaultTemplate>
            <CompetitorsLoader>
                <Component />
            </CompetitorsLoader>
            <CitiesLoader>
                <span>Opa</span>
            </CitiesLoader>
        </DefaultTemplate>
    );
}

export default Competitors