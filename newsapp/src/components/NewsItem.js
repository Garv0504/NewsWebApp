import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description,imageUrl,newsUrl,author,date,name} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!imageUrl?'https://images.moneycontrol.com/static-mcnews/2024/05/20240517103359_Fruits.jpg':imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className='text-muted'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
                            <div className="d-flex justify-content-between">
                                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                                <span className="badge bg-danger d-flex align-items-center">{name}</span>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
