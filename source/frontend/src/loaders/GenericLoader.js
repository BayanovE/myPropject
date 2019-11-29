import React from "react";
import PropsTypes from "prop-types"
import {ReduxFetch} from 'react-redux-fetch';
import reduxFetch from "react-redux-fetch";


const GenericLoader = ({fetchConfig, props}) => (
    <ReduxFetch config={fetchConfig} fetchOnMount></ReduxFetch>
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
)

GenericLoader.propsTypes = {
    fetchConfig: PropsTypes.arrayOf(
        PropsTypes.shape({
            resource: PropsTypes.string.isRequired,
            method: PropsTypes.string,
            request: PropsTypes.arrayOf(
                PropsTypes.shape({
                    url: PropsTypes.string.isRequired,
                    body: PropsTypes.object,
                    headers: PropsTypes.oneOfType([PropsTypes.object, PropsTypes.func]),
                    meta: PropsTypes.object,
                    comparison: PropsTypes.string,
                    force: PropsTypes.bool,
                    clearValueOnRequest: PropsTypes.bool,
                })
            ),
        })
    ).isRequired,

};

export default reduxFetch(GenericLoader.props.fetchConfig)(GenericLoader);