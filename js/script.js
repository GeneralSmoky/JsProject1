"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
        b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы absolute");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat === false) {
      personalMovieDB.privat = true;
    } else if (personalMovieDB.privat === true) {
      personalMovieDB.privat = false;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      if (genre === '' || genre === null) {
          console.log('Вы ввели ХУЙНЮ УДАЛЯЙ ГНИДА')
          i--
      } else {
          personalMovieDB.genres[i - 1] = genre;
      };

      
    }
    
    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимы жанр ${i + 1} - это ${item}`);
    });
  },
};



//  let i = 0;

//  do {
//    i++;

//    const a = prompt("Один из последних просмотренных фильмов?", ""),
//          b = prompt("На сколько оцените его?", "");

//    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//      personalMovieDB.movies[a] = b;
//      console.log("done");
//    } else {
//      console.log("error");
//      i--;
//    }
//  } while (i < 2);

// let i = 0;

// while (i < 2) {
//   i++;

//   const a = prompt("Один из последних просмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");

//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     console.log("error");
//     i--;
//   };
// };


