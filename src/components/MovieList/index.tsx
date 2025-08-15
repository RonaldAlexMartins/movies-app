'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';

export interface MovieType {
  id: number,
  title: string,
  overview: string,
  poster_path: string,
  vote_average: number,
}



function MovieList() {

  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'https://api.themoviedb.org/3/discover/movie',
        params: {
          api_key: '29ca3b2e79af2c5539f053a63880c384',
          language: 'pt-BR'
        }
      });
      // CORREÇÃO: Atualizar o estado com os dados da API e parar o estado de 'loading'.
      setMovies(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <ul className='movie-list'>
      {loading ? (
        <p>Carregando filmes...</p>
      ) : (
        // CORREÇÃO: Usar o método map() para renderizar os filmes.
        // Adicionar uma 'key' única para cada item para evitar warnings do React.
        movies.map(movie => (
          <li key={movie.id} className='movie-card'>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
            <p>
              {movie.vote_average}/10
            </p>
          </li>
        ))
      )}
    </ul>
  );
}

export default MovieList;