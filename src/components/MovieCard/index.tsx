import './index.scss'
import { Movie } from '../types/movie'
import StarRating from '../StarRating'
export interface Props {
  movie: Movie
}

function MovieCard({ title, poster_path, overview, vote_average }: Movie) {

  const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`
  const altImage = `Pôster do Filme ${title}`
  const shortDescription = overview ? overview.split(' ').slice(0, 20).join(' ') + '...' : '';

  return (
    <li className="movie-card">
      <div className="movie-poster">
        <img src={imageUrl} alt={altImage} />
      </div>
      <div className="movie-infos">
        <p className="movie-title"> {title} </p>

        {vote_average > 0 && <StarRating rating={vote_average} />}

        <div className={`hidden-content ${shortDescription ? 'with-text' : ''}`}>
          {shortDescription && <p className="description">{shortDescription}</p>}
          <button className="btn-default"> Ver mais</button>
        </div>
      </div>
    </li>
  )
}

export default MovieCard;