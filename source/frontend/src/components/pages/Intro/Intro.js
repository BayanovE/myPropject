import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';

import logo from './logo.png'
import styles from './Intro.module.sass'
import { sample } from 'actions/sample'

class Intro extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    name: PropTypes.string
  }

  componentDidMount() {
    this.props.dispatch(sample.hello("myproject"))
  }

  render() {
    return (
      <div className={styles.intro}>
        <header className={styles.introHeader}>
          <img src={logo} className={styles.introLogo} alt="logo" />
          {
            this.props.name && <p>
              {this.props.name}
            </p>
          }
          <p>
            {"Темплейт запущен! 50% процентов тестового задания сделано."}
          </p>
          <p><Button variant="contained" color="primary">hello</Button></p>
          <a
            className={styles.introLink}
            href="/game"
          >
            {"Начать играть"}
          </a>
          <a
            className={styles.introLink}
            href="/fame"
          >
            {"Посмотреть рекорды"}
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.sample.name
})

export default connect(mapStateToProps)(Intro)
