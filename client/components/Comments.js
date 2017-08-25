import React, {
    PropTypes,
} from 'react';

class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.renderComment = this.renderComment.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderComment(comment, i) {
        let handleRemoveComment = (postId, index) => {
            this.props.removeComment(postId, index)
        };

        return <div className="comment" key={i}>
            <p className="">
                <strong className="">{comment.user}</strong>
                {comment.text}
                <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
            </p>
        </div>
    }

    handleSubmit(e) {
        e.preventDefault();
        const {postId} = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
    }


    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        );
    }
}

export default Comments;