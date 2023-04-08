// Write your code here
import './index.css'
import MoviesSlider from '../MoviesSlider'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    each => each.categoryId === actionMovie,
  )

  const comedyMoviesList = moviesList.filter(
    each => each.categoryId === comedyMovie,
  )

  return (
    <div className="prime-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-img"
        alt="prime video"
      />
      <div className="movies-container">
        <h1 className="action-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="comedy-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
