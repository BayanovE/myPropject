import React, {Component} from "react";
import {connect} from 'react-redux'
import PropTypes from "prop-types"


import LoadingIndicator from './LoadingIndicator'
/*
 *  config = {
 *      resource: 'строка для названия action'a'
 *      method: 'get, post, etc...'
 *      request: {
 *          url: '',
 *          method:  *GET, POST, PUT, DELETE, etc.
 *          mode:  no-cors, cors, *same-origin
 *          cache:  *default, no-cache, reload, force-cache, only-if-cached
 *          credentials:  include, *same-origin, omit
 *          headers: {
 *              'Content-Type': 'application/json',
 *              // 'Content-Type': 'application/x-www-form-urlencoded',
 *          },
 *          redirect:  manual, *follow, error
 *          referrer:  no-referrer, *client
 *          body: JSON.stringify(data), // тип данных в body должен соответвовать значению заголовка "Content-Type"
 *          isSiteApi = true // автоматом докидывает адрес апи сайта
 *      }
 *  }
*/

function getRequestActionName(type = '', resource = '') { //TODO: стоит вынести в отдельный файл
    
    if(typeof resource !== 'string' &&  resource.length === 0)
        return '';

    const baseName = `${resource.toUpperCase()}_HTTP_REQUEST`;

    switch (type) {
        case 'init':
            return `${baseName}_INIT`;
        case 'start':
            return `${baseName}_START`;
        case 'success':
            return `${baseName}_SUCCESS`;
        case 'failed':
            return `${baseName}_FAILED`;
        case 'getStoreStatus':
            return resource;
        default:
            return '';
    }
}

class GenericLoader extends Component {
    
    componentDidMount() {
        this.TrySend();
    }

    componentDidUpdate() {
        this.TrySend();
    }

    TrySend() {                                                         //Возможность принудительного обновления?
        let {resource, method, storeData, lifetime, request} = this.props;

        if(new Date().getTime() - storeData.timestamp < lifetime ||
            storeData.status === 'loading')
            return;

        this.props.InitHttpRequst('INIT_HTTP_REQUEST',
            {
                resource,
                method,
                request,
            }
        );

    }

    //TODO: Вынести закгрузчиики в отдельные компоненты

    renderLoader = () => {

        return <LoadingIndicator />;
        // return(
        //     <div className="loading-banner">
        //         Гружу. Со всех ног.
        //     </div>
        // )
    }

    renderError = (errorData) => {
        return(
            <div className="error-banner">
                Упс, ошибочка закгрузки вышла.
            </div>
        )
    }

    renderContent = () => { 
        return this.props.children;
    }

    render() {
        const {storeData, renderLoader, renderError, shouldShowLoader} = this.props;

        switch (storeData.status) {
            case 'success':
                return this.renderContent();

            case 'loading': 

                if(!shouldShowLoader){
                    return this.renderContent();
                }

                if(typeof renderLoader === 'function')
                    return renderLoader();
                else
                    return this.renderLoader();

            case 'error': 
                if(typeof renderError === 'function')
                    return renderError();
                else
                    return this.renderError(storeData.errorMessage);
        
            default:
                //return null;
                break;
        }
        return null;
    }
}

GenericLoader.defaultProps = {
    storeData: {},
    lifetime: 100000
}

GenericLoader.propTypes = {
    resource: PropTypes.string.isRequired, 
    method: PropTypes.string.isRequired, 
    request: PropTypes.shape({
        url: PropTypes.string.isRequired, 
        body: PropTypes.object, 
        headers: PropTypes.string,//ToDo: актуализировать
    }).isRequired,
    lifetime: PropTypes.number,
    storeData: PropTypes.object,
    shouldShowLoader: PropTypes.bool,
}

function mapStateToProps(state, {resource}) {
    return {
        storeData: state.api[getRequestActionName('getStoreStatus', resource)],
    }
};

const InitHttpRequst = (type, payload) => ({type, payload})

const mapDispatchToProps = {
    InitHttpRequst,
};

export default connect(mapStateToProps, mapDispatchToProps)(GenericLoader);