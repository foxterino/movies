export interface IMovie {
  id: number;
  title: string;
  year: number;
  rating: number;
  producer: string;
  budget: number;
  poster: string;
  actors: string[];
  genres: IGenre[];
  comments: IComment[];
}

interface IGenre {
  id: number;
  movie_id: number;
  name: string;
}

export interface IComment {
  id: number;
  movie_id: number;
  text: string;
}

export interface IMoviesRequest {
  year: string | null;
  genre: string | null;
  order: IOrder;
}

export interface IOrder {
  column: keyof IMovie;
  direction: OrderDirection;
}

export type OrderDirection = 'asc' | 'desc';

export interface IAddCommentRequest {
  movieId: number;
  text: string;
}
