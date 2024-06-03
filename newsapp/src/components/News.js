import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js'
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 9,
        category: "general"
    }

    PropTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    articles = [
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "England vs Pakistan LIVE: Third women's ODI, Chelmsford - cricket score",
            "description": "England face Pakistan in the third women's one-day international at Chelmsford - text updates, radio commentary & video highlights.",
            "url": "http://www.bbc.co.uk/sport/cricket/live/cqvvenxw862t",
            "urlToImage": "https://static.files.bbci.co.uk/ws/simorgh-assets/public/sport/images/metadata/poster-1024x576.png",
            "publishedAt": "2024-05-29T12:07:23.0133664Z",
            "content": "England: Tammy Beaumont, Maia Bouchier, Heather Knight (captain), Nat Sciver-Brunt, Danni Wyatt, Amy Jones (wk), Alice Capsey, Charlie Dean, Sophie Ecclestone, Kate Cross, Lauren Bell. \r\nPakistan: Sa… [+151 chars]"
        },
        {
            "source": {
                "id": "bbc-sport",
                "name": "BBC Sport"
            },
            "author": null,
            "title": "Nathan Lyon 'surprised' by James Anderson England retirement",
            "description": "Australia spinner Nathan Lyon says he is \"surprised\" James Anderson is retiring from Test cricket because he would still be England’s \"best bowler\".",
            "url": "http://www.bbc.co.uk/sport/cricket/articles/cy66qj93q0eo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_sport/4659/live/7a27f080-1da2-11ef-bc6b-0dd4c3aa5602.jpg",
            "publishedAt": "2024-05-29T11:52:13.3563025Z",
            "content": "Anderson, England's all-time leading wicket-taker, held talks in April with Test coach Brendon McCullum, captain Ben Stokes and managing director Rob Key.\r\nThe hierarchy's decision to move on from An… [+601 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super();
        // console.log("Hello i am a constructor from news components");
        this.state = {
            articles: [],
            loading: false,
            page: 1,

        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4bf390909bab460a830659ab3aadfa45&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles ,totalResults: parsedData.totalResults})
    }

    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4bf390909bab460a830659ab3aadfa45&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    handleNextClick = async ()=>{
        if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=4bf390909bab460a830659ab3aadfa45&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({
                loading: true
            })
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }
    

    render() {
        return (
            <div className="container my-3">
                <h2 className="text-center mt-2 mt-sm-4">NewsMonkey - Top Headlines</h2>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-sm-3 my-1" key={element.url}>
                        <NewsItem title={element.title?element.title+"...":""} description={element.description?element.description+"...":""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} name={element.source.name}/>
                    </div>
                    })}
                </div>
                <div className="d-flex justify-content-between mt-sm-5 mt-3">
                    <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>{"<< Previous"}</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className={`btn btn-dark`} onClick={this.handleNextClick}>{"Next >>"}</button>
                </div>
            </div>
        )
    }
}

export default News
