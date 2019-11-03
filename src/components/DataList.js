import React from 'react';
import { connect } from 'react-redux';
import { fetch } from '../actions';

class DataList extends React.Component {
    componentDidMount() {
        this.props.fetch();
    }

    render() {
        console.log(this.props.posts.data);
        return (
            <section className="pad10">
                <div className="card">List of Datapoints</div>
                <div className="card">List of Datapoints</div>
                <div className="card">List of Datapoints</div>
                <div className="card">List of Datapoints</div>
                <div className="card">List of Datapoints</div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetch })(DataList);