import './index.scss'
import {Movie} from '../types'

function MovieCard(props:Movie) {
    const imageUrl = `https://image.tmdb.org/t/p/original${props.poster_path}`
    const altImage = `Pôster do Filme ${props.title}`

  return (
        <li className='movie-card'>
            <h3>{props.title}</h3>
            <p>{props.overview}</p>
            <img src={imageUrl} alt={altImage} />
            <p>
            {props.vote_average}
            </p>
        </li>
  )
}

export default MovieCard;