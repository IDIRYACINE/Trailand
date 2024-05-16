const api_key = "xxxxxxxxxxxxxxxx"

const api_url = "https://api.themoviedb.org/3"

export const movies_top_api = `${api_url}/movie/top_rated?api_key=${api_key}&language=en-US&page=1`

export const movie_details_api = (id: number) => `${api_url}/movie/${id}?api_key=${api_key}&language=en-US`

export const movies_upcoming_api = `${api_url}/movie/upcoming?api_key=${api_key}&language=en-US&page=1`

export const movie_poster_image_url = (image: string) => `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${image}`

export const movies_search_api = (query: string) => `${api_url}/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`

export const movie_trailler_api = (id: number) => `${api_url}/movie/${id}/videos?api_key=${api_key}&language=en-US`

export const isProduction = false


