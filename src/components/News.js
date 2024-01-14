import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types'

function News(props) {
    const [articles, setArticles] = useState([])
    const [totalResults, setTotalResults] = useState(null)
    const [page,setPage] = useState(1)
    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&category=${props.category}&page=${page}&pageSize=${props.pageSize}`
        props.setProgress(15)
        const response = await fetch(url)
        props.setProgress(50)
        const parsedData = await response.json()
        props.setProgress(75)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        props.setProgress(100)
    }
    
    const fetchData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&category=${props.category}&page=${page+1}&pageSize=${props.pageSize}`
        setPage(page+1) 
        const response = await fetch(url)
        const parsedData = await response.json()
        setArticles(articles.concat(parsedData.articles))
    }

    const capitalizeFirstLetter = (text)=>{
        return text.charAt(0).toUpperCase()+text.slice(1)
    }
    useEffect(() => {
        updateNews()
        // eslint-disable-next-line
    },[])
    
    return (
        <>
            <h1 className="text-center" style={{margin:"40px 0px",marginTop:"90px"}}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            <InfiniteScroll
                dataLength={articles.length} //This is important field to render the next data
                next={fetchData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
               
            >
                <div className='container'>
                    <div className='row'>
                        {articles.map((element) => {
                            return <div className='col-md-4' key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>


        </>
    )
}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
