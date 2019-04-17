import React from 'react';
import ReactDOM from 'react-dom';
import Bluebird from 'bluebird';

fetch.Promise = Bluebird;

import Users from './components/Users';

ReactDOM.render(
	<Users />,
    document.getElementById('Users')
);