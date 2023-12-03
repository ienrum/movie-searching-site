export interface FailedResponse {
  Response: string;
  Error: string;
}
export interface ListResponseValue {
  Search?: Search[];
  totalResults?: string;
  Response: string;
}
export interface DetailResponseValue {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
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
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
export interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export type DetailMovie = DetailResponseValue & Partial<FailedResponse>;
export type MovieList = ListResponseValue & Partial<FailedResponse>;
