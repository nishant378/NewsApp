import React, { Component } from 'react'
import NewsItem from './NewsItem'

/*import PropTypes from 'prop-types'*/


export class News extends Component {

    /*static defaultProps={
        country:'in',
        pageSize:8,
        category:'general'
    }
    static propTypes={
        country:PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }*/

    constructor(props)
    {
            super(props);
            this.state={
                articles:[],
                page:1
            }
            if(this.props.category!=="general")
            {
            document.title=(this.props.category).charAt(0).toUpperCase()+(this.props.category).substring(1)+"-NewsMonkey"
            }
    }
     
    async updateNews()
    {
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a129ef4c2ad458ca829b6e881e38a7a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults})
    }
      

      async componentDidMount()
     {
          this.updateNews();
     }
      

     handlePreviousClick=async()=>
     {
        /*this.setState({page:this.state.page-1}) 
        this.updateNews();*/
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a129ef4c2ad458ca829b6e881e38a7a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,page:this.state.page-1})
     }


     handleNextClick=async()=>
     {
        /* this.setState({page:this.state.page+1}) 
         this.updateNews();*/
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5a129ef4c2ad458ca829b6e881e38a7a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,page:this.state.page+1})
     }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsMonkey - Top Headline</h1>
                <div className="row">
                {this.state.articles.map((element)=>{   
                    return <div className="col-md-4" key={element.url} >
                         <NewsItem title={element.title} description={element.description}  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/> 
                     </div>
                })}
                
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}> &larr; Previous</button>
                    <button disabled={this.state.page>=8} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}




export default News


