import React from "react";
import PropsTypes from "prop-types"
import {ReduxFetch} from 'react-redux-fetch';
import urljoin from 'url-join'
import config from 'config'

const fetchConfig = [
    {
        resource: "competitors",
        method: 'get',
        request: {
            url: urljoin(config.backendUrl, '/api/competitors'),
        },
    },
];

const CompetitorsLoader = (props) => (
    <ReduxFetch config={fetchConfig} fetchOnMount>
    {(data) => {
        const {competitorsFetch} = data; 
        if (competitorsFetch.rejected) {
            return <div>Oops... Could not fetch </div>;
        }

        if (competitorsFetch.fulfilled) {
            return (props.children);
        }

        return <div>Loading...</div>;
    }}
  </ReduxFetch>
)

CompetitorsLoader.propsTypes = {
    dispatchQuery: PropsTypes.func.isRequired,

};

export default CompetitorsLoader;