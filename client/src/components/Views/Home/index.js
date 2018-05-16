import React, { Component } from 'react'
import { updateContent } from './actions'
import { connect } from 'react-redux';

export class Home extends Component {

    componentDidMount() {
        this.props.startLoad()
    }

    render() {
        return (
            <div>{this.props.articles}</div>
        )
    }
}

export const mapStateToProps = ({ home }) => ({
    isLoading: home.isLoading,
    articles: home.articles
})
export const mapDispatchToProps = dispatch => ({
    startLoad: () => {
        dispatch(updateContent())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
