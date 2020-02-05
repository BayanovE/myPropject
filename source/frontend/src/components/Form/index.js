import React from 'react'

class Form extends React.Component {
    submitHandler = async (e) => {
        e.preventDefault();
        const url = this.props.action || e.currentTarget.action.slice(0, e.currentTarget.action.indexOf('?'));
        try {
            let response  = await fetch(url, {
                method: 'POST',
                body: new FormData(e.target),
            });
            debugger;
            let result = response.json();
            alert(result.json);

        } catch (error) {
            debugger;
        }
        
    }

    render() {
        return(
            <form onSubmit={this.submitHandler} {...this.props}>
                {this.props.children}
            </form>
        );
    }
};

export default Form;