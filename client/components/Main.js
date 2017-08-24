import React, {
    PropTypes,
} from 'react';
import {Link} from 'react-router';


class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstragram</Link>
                </h1>

                {React.cloneElement(this.props.children, this.props)}
            </div>
        );
    }
}

export default Main;
