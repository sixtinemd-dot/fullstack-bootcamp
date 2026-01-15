export interface Recipe {
  id: number;
  name: string;
  image: string;
  ingredients: string[];
  instructions: string[];
}


export interface DataState<T> {
  data: T[];
  loading: boolean;
  error: string | null;
}