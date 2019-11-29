import React from 'react'
import PropTypes from 'prop-types'

import List from "./../../components/CompetitorsList"
import {connect} from 'react-redux'

// const data = [
//     { surname: "Баянов", name: "Егор", secondName: 'Максимович', club: 'NoName', city: 66 },
//     { surname: "Иванов", name: "Иван", secondName: 'Иванович', club: 'Золотой Сокол', city: 66 }
// ]

const increment = () => ({ type: 'INCREMENT' })
const decrement = () => ({ type: 'DECREMENT' })
const incrementAsync = () => ({ type: 'INCREMENT_ASYNC' })

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) =>
  <div>
    <button onClick={onIncrementAsync}>
      Increment after 1 second
    </button>
    {' '}
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
  </div>

const Component = ({competitors, dispatch, value, increment, decrement, incrementAsync}) => {
    return (
        <React.Fragment>
            <List data={competitors} />
            <Counter
                value={value}
                onIncrement={increment}
                onDecrement={decrement}
                onIncrementAsync={incrementAsync}
            />
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

const mapDispatchToProps = {
    increment,
    decrement,
    incrementAsync,
}

export default connect(mapStateToProps, mapDispatchToProps)(Component); 