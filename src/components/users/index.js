import React from 'react';

class Users extends React.Component {    
       
    constructor(props) {
        super(props);
        this.state = { people: [] };
    }
    
    componentDidMount() {
       
    }
    
    componentWillUnmount() {
    
    }

    render() {
    	return( 
        	<div>
                <h1>Our team:</h1>
                <ul>
                   Output team member information here using the User component defined above

                </ul>
            </div>
        );
    }
};

const formatEmailLink = (email) => {
    return `emailto:${email}`;
};

const User = (props) => {
  
  const email = formatEmailLink(props.email);
   const company = props.company !== undefined ? props.company : "none";
    
    return (<div className="username"><a href={email}>{props.name}</a><div className="badge">{company}</div></div>);
};