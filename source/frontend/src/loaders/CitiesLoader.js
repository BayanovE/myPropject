import React from 'react'

import GenericLoader from './GenericLoader';


const CompetitorsLoader = (props) => {

    return(
        <GenericLoader 
            resource='cities' 
            method='get' 
            request={{url: "/cities"}}
        >
            {props.children}
        </GenericLoader>
    );
}

export default CompetitorsLoader;