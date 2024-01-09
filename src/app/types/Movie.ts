interface Raitings {
  Source: string;
  Value: string;
}

export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Realesed: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Raitings[];
  Metascore: string;
  imdbRating: string;
  imbdVotes: string;
  imdbID: string;
  Type: 'movie' | 'serials';
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: boolean;
}

export interface MovieShort {
  Poster: string;
  Title: string;
  Type: string
  Year: string;
  imdbID: string
}
