import React from 'react'

import GenericLoader from './GenericLoader';


const CompetitorsLoader = (props) => {

    return(
        <GenericLoader 
            resource='competitors' 
            method='get' 
            request={{url: "/competitors"}}
        >
            {props.children}
        </GenericLoader>
    );
}

export default CompetitorsLoader;