import React from "react";

import Component from "./component";
import DefaultTemplate from "./../../components/templates/DefaultTemplate";
import CompetitorsLoader from "../../loaders/CompetitorsLoader";

function Competitors(props) {
    return(
        
        <DefaultTemplate>
            <CompetitorsLoader>
                <Component />
            </CompetitorsLoader>
        </DefaultTemplate>
    );
}

export default Competitors