import React, {Component} from 'react'

class MoviesList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.sortTitles();
    }

    render() {
        const propsData = this.props.data;        
        return propsData.map(movie => {
            return (
                <div className="card col-md-3 mx-3 my-3 px-0" key={movie.id}>
                    <img className="card-img-top" src={movie.poster_path} alt={movie.title} />
                    <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <div className="justify-content-between">
                    <p className="card-text">
                    <span className="float-left">{movie.title}</span> 
                    <button type="button" className="btn btn-outline-secondary btn-sm float-right">{movie.release_date}</button>
                    </p>
                    </div>                    
                    <div><span>{movie.genres}</span></div>                    
                </div>              
                </div>                
            )
        })        
    }
}
export default MoviesList;