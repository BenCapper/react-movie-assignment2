// export const getMovies = ( page ) => {
//   return fetch(
//     `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };

// export const getAllTv = ( page ) => {
//   return fetch(
//     `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };
  
// export const getMovie = (args) => {
//   //console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

// export const getSimilarMovies = (args) => {
//   //console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

// export const getCompany = (args) => {
//   //console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/company/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

// export const getTv = (args) => {
//   //console.log(args)
//   const [, idPart] = args.queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };


// export const getUpcoming = ( page ) => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };

// export const getTrendingMovies = ( page ) => {
//   return fetch(
//     `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };

// export const getTrendingTv = ( page ) => {
//   return fetch(
//     `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };


// export const getTopTv = ( page ) => {
//   return fetch(
//     `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=${page}`
//   ).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//      throw error
//   });
// };

// export const getGenres = async () => {
//   return fetch(
//     `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
//   ).then( (response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

// export const getTvGenres = async () => {
//   return fetch(
//     `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
//   ).then( (response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();
//   })
//   .catch((error) => {
//     throw error
//  });
// };

// export const getMovieImages = ({ queryKey }) => {
//   const [, idPart] = queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then( (response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();

//   })
//   .catch((error) => {
//     throw error
//  });
// };

// export const getTvImages = ({ queryKey }) => {
//   const [, idPart] = queryKey;
//   const { id } = idPart;
//   return fetch(
//     `https://api.themoviedb.org/3/tv/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   ).then( (response) => {
//     if (!response.ok) {
//       throw new Error(response.json().message);
//     }
//     return response.json();

//   })
//   .catch((error) => {
//     throw error
//  });
// };

// export const getMovieReviews = (id) => {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
//   )
//     .then((res) => res.json())
//     .then((json) => {
//       // console.log(json.results);
//       return json.results;
//     });
// };

export const getTvReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => {
      // console.log(json.results);
      return json.results;
    });
};


export const getTvSeason = (args) => {
  const [, idPart] = args.queryKey;
  const { id, sid } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/season/${sid}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

export const searchCompany = (args) => {
  const [, idPart] = args.queryKey;
  const { query, page } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/search/company?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${query}&page=${page}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};

export const searchPerson = (args) => {
  const [, idPart] = args.queryKey;
  const { query, page } = idPart;
  return fetch(
    `https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_KEY}&query=${query}&page=${page}`
  ).then( (response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();

  })
  .catch((error) => {
    throw error
 });
};













export const login = (username, password) => {
  return fetch('/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const getMovies = () => {
  return fetch(
     '/api/movies', {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
      }
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getAllTv = () => {
  return fetch(
     '/api/tv', {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
      }
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getUpcomingMovies = () => {
  return fetch(
     `/api/movies/tmdb/upcoming`, {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
      }
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getTrendingMovies = () => {
  return fetch(
     `/api/movies/tmdb/trending`, {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
      }
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getTrendingTv = () => {
  return fetch(
     `/api/tv/tmdb/trending`, {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
      }
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getTopTv = () => {
  return fetch(
     `/api/tv/tmdb/top`, {
          headers: {
              'Authorization': window.localStorage.getItem('token')
          }
      }
  ).then(res => {
      return res.json();
  }).catch((error) => {
      console.log(error);
  });
};

export const getMovie = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}`, {
         headers: {
             'Authorization': window.localStorage.getItem('token')
         }
     }
 ).then(res => {
     return res.json();
 }).catch((error) => {
     console.log(error);
 });
};

export const getTv = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/tv/${id}`, {
         headers: {
             'Authorization': window.localStorage.getItem('token')
         }
     }
 ).then(res => {
     return res.json();
 }).catch((error) => {
     console.log(error);
 });
};

export const getSimilarMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}/similar`, {
         headers: {
             'Authorization': window.localStorage.getItem('token')
         }
     }
 ).then(res => {
     return res.json();
 }).catch((error) => {
     console.log(error);
 });
};

export const getCompany = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/company/${id}`, {
         headers: {
             'Authorization': window.localStorage.getItem('token')
         }
     }
 ).then(res => {
     return res.json();
 }).catch((error) => {
     console.log(error);
 });
};

export const getGenres = () => {
  return fetch(
    `/api/genres/movie`, {
         headers: {
             'Authorization': window.localStorage.getItem('token')
         }
     }
 ).then(res => {
     return res.json();
 }).catch((error) => {
     console.log(error);
 });
};

export const getTvGenres = () => {
  return fetch(
    `/api/genres/tv`, {
         headers: {
             'Authorization': window.localStorage.getItem('token')
         }
     }
 ).then(res => {
     return res.json();
 }).catch((error) => {
     console.log(error);
 });
};

export const getMovieImages = (args) => {
  console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}/images`, {
         headers: {
             'Authorization': window.localStorage.getItem('token')
         }
     }
 ).then(res => {
     return res.json();
 }).catch((error) => {
     console.log(error);
 });
};

export const getTvImages = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/tv/${id}/images`, {
         headers: {
             'Authorization': window.localStorage.getItem('token')
         }
     }
 ).then(res => {
     return res.json();
 }).catch((error) => {
     console.log(error);
 });
};

export const getMovieReviews = (id) => {

  return fetch(
    `/api/movies/${id}/reviews`, {
         headers: {
             'Authorization': window.localStorage.getItem('token')
         }
     }
 ).then(res => {
     return res.json();
 }).catch((error) => {
     console.log(error);
 });
};
