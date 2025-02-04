import React from 'react';

const NewsItem=(props)=>{
        let { title, description, imageUrl, newsUrl, author, date ,source} = props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <div style={
                        {
                            justifyContent: 'flex-end',
                            position: 'absolute',
                            right: 0
                        }}>
                        <span className='badge rounded-pill bg-danger'>{source}</span>
                    </div>
                    <img src={!imageUrl ? "https://readwrite.com/wp-content/uploads/2024/05/Bitcoin-price.jpg" : imageUrl} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        );
    }


export default NewsItem;
