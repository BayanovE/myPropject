import React from "react";
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
            return <div>Упс... Не удалось загрузить данные</div>;
        }
        if (competitorsFetch.fulfilled) {
            const childrenWithProps = React.Children.map(props.children, child =>
                React.cloneElement(child, { competitors: competitorsFetch.value})
              );
          
              return <div>{childrenWithProps}</div>
        }

        return <div>Загрузка...</div>;
    }}
  </ReduxFetch>
)

CompetitorsLoader.propsTypes = {
    
};

export default CompetitorsLoader;