import React from 'react';

import AuthTemplate from '../../components/templates/AuthTemplate';
import Component from './Component';

class SignIn extends React.Component{
    render() {
        return (
            <AuthTemplate title='Авторизация'>
                <Component />
            </AuthTemplate>
          );
    }
}

export default SignIn