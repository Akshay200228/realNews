import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Newsitem from './Newsitem';
import Spinner from './Spinner';
export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 9
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number

  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d51086bcbbdc48f1b64ef56c92766561&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResult: parsedData.totalResult,
      loading: false
    })
  }
  async componentDidMount() {
    this.updateNews()
  }
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews()
  }
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews()

  }

  render() {
    return (
      <div className='container my-4'>
        <h1 className='text-center text-bold'style={{margin:' 35px 0px',marginTop:'90px'}}>realNews - HeadLines</h1>
        <hr />
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <Newsitem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
            </div>

          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-4" onClick={this.handlePrevClick}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / this.props.pageSize)} type="button" className="btn btn-dark mx-4" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
