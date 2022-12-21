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

export const getTvReviews = (id) => {
  return fetch(
    `/api/tv/${id}/reviews`, {
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

export const getTvSeason = (args) => {
  const [, idPart] = args.queryKey;
  const { id, sid } = idPart;
  return fetch(
    `/api/tv/${id}/season/${sid}`, {
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

export const searchCompany = (args) => {
  const [, idPart] = args.queryKey;
  const { query } = idPart;
  console.log(query)
  return fetch(
    `/api/search/company/${query}`, {
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

export const searchPerson = (args) => {
  const [, idPart] = args.queryKey;
  const { query } = idPart;
  return fetch(
    `/api/search/person/${query}`, {
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

export const getUserFavouriteMovies = (user) => {
    return fetch(
        `/api/users/${user}/favourites/movies`, {
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

export const newFavouriteMovie = ( user, movie ) => {
    return fetch(
      `/api/users/${user}/favourites/movies`, {
           headers: {
               'Authorization': window.localStorage.getItem('token'),
               'Content-Type': 'application/json'
           },
           method: 'post',
           body: JSON.stringify({ id: movie.id, title: movie.title })
       }
   ).then(res => {
       return res.json();
   }).catch((error) => {
       console.log(error);
   });
  };

  export const getUserFavouriteTv = (user) => {
    return fetch(
        `/api/users/${user}/favourites/tv`, {
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

export const newFavouriteTv = ( user, tv ) => {
    return fetch(
      `/api/users/${user}/favourites/tv`, {
           headers: {
               'Authorization': window.localStorage.getItem('token'),
               'Content-Type': 'application/json'
           },
           method: 'post',
           body: JSON.stringify({ id: tv.id, name: tv.name })
       }
   ).then(res => {
       return res.json();
   }).catch((error) => {
       console.log(error);
   });
  };

export const newMovieReview = ( id, review ) => {
  return fetch(
    `/api/movies/${id}/reviews`, {
         headers: {
             'Authorization': window.localStorage.getItem('token'),
             'Content-Type': 'application/json'
         },
         method: 'post',
         body: JSON.stringify({ content: review.content, author: review.author,  })
     }
 ).then(res => {
     return res.json();
 }).catch((error) => {
     console.log(error);
 });
};