'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';
import MovieCard from '../MovieCard';
import { Movie } from '../types/movie';
export interface MovieType {
  id: number,
  title: string,
  overview: string,
  poster_path: string,
  vote_average: number,
}



function MovieList() {

  const [movies, setMovies] = useState<Movie[]>([]);
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
        movies && movies.map(movie => (
          <MovieCard
            key={movie.id}
            {...movie}
          />
        ))
      )}
    </ul>
  );
}

export default MovieList;