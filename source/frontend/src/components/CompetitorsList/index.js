import React from 'react'
import {connect} from 'react-redux'

import Component from './component'
import CitiesLoader from '../../loaders/CitiesLoader'
import {getFormattedCities}  from '../../domain/selectors'

function CompetitorsListTable ( props ) {
    return (
        <CitiesLoader >
            <Component  
                {...props}
                cities={props.cities}
            />
        </CitiesLoader>
    )
}

const mapStateToProps = ( state ) => {
    const cities = getFormattedCities(state);
    return { cities };
}

export default connect(mapStateToProps)(CompetitorsListTable);