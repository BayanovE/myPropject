import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import List from "./../../components/CompetitorsList"

const Component = ({competitors, dispatch, value, increment, decrement, incrementAsync, sendHttp}) => {
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
    return {value: store.value}
}


export default connect(mapStateToProps)(Component); 