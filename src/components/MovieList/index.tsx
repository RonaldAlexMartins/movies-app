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
    const controller = new AbortController();

    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/discover/movie',
          {
            params: {
              api_key: process.env.NEXT_PUBLIC_TMDB_KEY, // ✅ Pega de env
              language: 'pt-BR',
            },
            signal: controller.signal, // ✅ permite cancelamento
          }
        );

        setMovies(response.data.results);
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error('Erro ao buscar filmes:', error);
        }
      } finally {
        setLoading(false);
      }
    };

  
    fetchMovies();

    return () => controller.abort();
  }, []);

  if (loading) return <p>Carregando filmes...</p>;

  return (
    <ul className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} {...movie} />)
      ) : (
        <p>Nenhum filme encontrado.</p>
      )}
    </ul>
  );
}

export default MovieList;