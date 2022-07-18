export type Rating = 'NC-17' | 'R' | 'PG-13' | 'G' | 'PG'

export interface FilmEntry {
  film_id:number
  title: string
  description:string
  release_year:number
  language_id:number
  rental_duration:number
  rental_rate:number
  length:number
  replacement_cost:number
  rating: Rating
  last_update:string
  special_features:string
  fulltext:string
}