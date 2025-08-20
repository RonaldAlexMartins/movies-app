import './index.scss'
import {Movie} from '../types'

export interface Props {
  movie: Movie
}

function MovieCard({title, poster_path, overview, vote_average}: Movie) {

  

    const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`
    const altImage = `Pôster do Filme ${title}`
    
    

  return (
        <li className='movie-card'>
            <h3>{title}</h3>
            <p>{overview}</p>
            <img src={imageUrl} alt={altImage} />
            <p>
            {vote_average}
            </p>
        </li>
  )
}

export default MovieCard;