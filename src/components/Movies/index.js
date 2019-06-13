import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getMovies, movieSearch, handleQuery, handlePage } from '../../actions/movies'
import SearchInput from '../../common/SearchInput'
import Loading from '../../common/Loading'
import MovieGrid from '../MovieGrid'
import Pagination from '../../common/Pagination'
import { debounce } from '../../utils'
import './movies.scss'

class Movies extends Component {

    componentDidMount() {
        this.props.getMovies(1)
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.query !== this.props.query){
            if(this.props.query.length > 0) {
                this.delayedSearch()
            } else {
                this.props.getMovies(1)
            }
        } else if (prevProps.currentPage !== this.props.currentPage){
            const page = this.props.currentPage + 1 
            this.props.getMovies(page)
        }
    }

    handleChange = e => {
        this.props.handleQuery(e.target.value)
    }

    handleSearch = () => {
        this.props.movieSearch(this.props.query)
    }

    delayedSearch = debounce( () => this.props.query.length > 0 && this.handleSearch(), 600 )

    handlePageChange = data => {
        // this.setState({ currentPage: data.selected })
        this.props.handlePage(data.selected)
    }

    render () {
        const { movies } = this.props
        return (
            <div className="movies">
                <div className="movies-header">
                   <SearchInput 
                        value={this.props.query}
                        onChange={this.handleChange}
                        maxLength={280}
                        placeholder="Search here..."
                   />
                </div>
                <div className="movies-content">
                    <Loading pending={movies.pending} size={80}>
                        {movies.results && <MovieGrid movies={movies.results} />}
                    </Loading>
                    {movies.page && 
                        <Pagination 
                            pageCount={movies.total_pages} 
                            initialPage={this.props.currentPage}
                            onPageChange={this.handlePageChange}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={2}
                        />
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies,
        query: state.movies.query,
        currentPage: state.movies.currentPage
    }
}

const mapDispatchers = {
    getMovies,
    movieSearch,
    handleQuery,
    handlePage
}

export default connect(mapStateToProps, mapDispatchers) (Movies)
