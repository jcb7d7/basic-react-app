import React from 'react';
import {getUsers} from '../../services/User';

class Users extends React.Component {    
       
    constructor(props) {
        super(props);
        this.state = {
            people: []
        };
    }

    async componentDidMount() {
        const users = await getUsers();
        this.setState({people: users});
    }

    render() {
    	return( 
        	<div>
                <h1>Our team:</h1>
                <ul>
                    {this.state.people.length > 0 &&
                    this.state.people.map((val, index) => {
                        return (
                            <li key={index}>
                                <h2>{val.name}</h2>
                                <h3>{val.company.name}</h3>
                                <a href={`mailto:${val.email}`}>{val.email}</a>
                            </li>

                        )
                    })}
                </ul>
            </div>
        );
    }
};

export default Users;