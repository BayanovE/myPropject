import React, { Component } from 'react'
import PropTypes from 'prop-types'
import connect from 'react-redux-fetch'
import urljoin from 'url-join'
import logo from './cup.png'
import styles from './HallOfFame.module.sass'
import config from 'config'

class HallOfFame extends Component {
  static propTypes = {
    dispatchUserGet: PropTypes.func.isRequired,
    userFetch: PropTypes.object,
  }

  componentDidMount() {
    this.props.dispatchUserGet()
  }

  render() {
    console.log(this.props); 
    return (
      <div className={styles.fame}>
        <header className={styles.fameHeader}>
          <img src={logo} className={styles.fameLogo} alt="logo" />
          <p>
            {"В качестве примера общения клиента и сервера тут будут загружены и показаны игроки."}
          </p>
          <a
            className={styles.fameLink}
            href="/game"
          >
            {"Начать играть"}
          </a>
          <a
            className={styles.fameLink}
            href="/"
          >
            {"На главную"}
          </a>
        </header>
        {
          this.props.userFetch.fulfilled && <div>
            {
              this.props.userFetch.value.map(user => <div className={styles.fameUser} key={user.id}>
                { user.name }
              </div>)
            }
          </div>
        }
      </div>
    );
  }
}

export default connect([
  {
    resource: 'user',
    method: 'get', // You can omit this, this is the default
    request: {
      url: urljoin(config.backendUrl, '/api/competitors'),
    },
  },
])(HallOfFame)
