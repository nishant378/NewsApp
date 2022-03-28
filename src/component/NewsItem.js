import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let {title,description,imageUrl,newsUrl,author,date}=this.props;
        return (
    <div className="my-3">
        <div className="card">
            <img src={!imageUrl?"https://cdn.cnn.com/cnnnext/dam/assets/211007043253-01-sachsenhausen-gate-super-tease.jpg":imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title">{title}<span className="badge bg-secondary">New</span></h4>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author===null?"Unknown":author} on {date}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
                )
    }
}

export default NewsItem


