import React from 'react'

function NewsItem(props) {
    const { title, description, imageUrl, newsUrl, date, author, source } = props;
    return (
        <>
            <div className="card" >
                <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",top:"0px"}}>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={imageUrl ? imageUrl : "https://thumbs.dreamstime.com/b/man-using-digital-tablet-page-not-found-45719386.jpg"} className="card-img-top" alt=".." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        </>
    )
}

export default NewsItem
