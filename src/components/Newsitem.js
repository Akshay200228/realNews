import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,author,date} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imageUrl?"https://www.cartoq.com/wp-content/uploads/2022/07/driving-in-monsoon-tips-10.jpeg":imageUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {!author?"Unknown" : author} or {date}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn brn-sm btn-primary">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
