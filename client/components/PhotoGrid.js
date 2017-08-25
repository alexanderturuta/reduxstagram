import React, {
    PropTypes,
} from 'react';
import Photo from './Photo'

class PhotoGrid extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, index) => <Photo {...this.props} key={index} i={index} post={post}/>)}
            </div>
        );
    }
}

export default PhotoGrid;
