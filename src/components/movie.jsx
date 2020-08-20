import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';

class Movies extends Component {
    state = {  
        movies:getMovies()
    }

    handleDelete=movie=>{
        const movies=this.state.movies.filter(m=>m._id !== movie._id);
        this.setState({
            movies:movies
        });
    }
    render() { 
        const {length}= this.state.movies;
        if(length===0) return <p>There is no movie with in the Database</p>
        return ( 
        <React.Fragment>    
        <p>Showing {length} Movies with in the Database</p>
        <table className="table">
            <thead>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
                <th></th>
            </thead>
            <tbody>
                {this.state.movies.map(movie=>
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                    </tr>
                )}
                
            </tbody>
        </table> 
        </React.Fragment>
        );
    }
}
 
export default Movies;