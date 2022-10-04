let numberOfFilms;


function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
        } else { 
            i--;
        }
        
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if ( personalMovieDB.count < 10) {
        console.log("Few films watched");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Nice watcher bro");
    } else if (personalMovieDB.count >= 30){
        console.log("U are film master");
    } else {
        console.log('Error');
    }
    
}

detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for (let i = 1; i < 4; i++){
        personalMovieDB.genres[i-1] = prompt(`Ващ любимый жанр под номером${i}`);
        
    }
}

writeYourGenres();