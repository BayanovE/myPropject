import React from "react";

import List from "./component";
import DefaultTemplate from "../../templates/DefaultTemplate";
import CompetitorsLoader from "../../loaders/CompetitorsLoader";

function Competitors(props) {
    return(
        
        <DefaultTemplate>
            <CompetitorsLoader>
                <List />
            </CompetitorsLoader>
        </DefaultTemplate>
    );
}

export default Competitors