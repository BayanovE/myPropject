import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import List from "./../../components/CompetitorsList"

const Component = ({competitors}) => {
    return (
        <React.Fragment>
            <List data={competitors} />
        </React.Fragment>);
};

Component.defaultProps = {
    competitors: [],
};

Component.propTypes = {
    competitors: PropTypes.array,
};

const mapStateToProps = store => {

    return {competitors: store.api['COMPETITORS_HTTP_REQUEST'].data}
}


export default connect(mapStateToProps)(Component); 