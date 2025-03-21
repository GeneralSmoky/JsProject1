"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

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

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы absolute");
  }
}

detectPersonalLevel();

function showMyDb(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDb(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}

writeYourGenres();
