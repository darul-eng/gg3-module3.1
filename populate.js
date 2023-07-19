let songs = [
    {title: "Song 1", artists: ["Artist 1", "Artist 2"], album: "Album 1"},
    {title: "Song 2", artists: ["Artist 2", "Artist 3"], album: "Album 2"},
    {title: "Song 3", artists: ["Artist 3", "Artist 4"], album: "Album 3"},
    {title: "Song 4", artists: ["Artist 4", "Artist 5"], album: "Album 4"},
    {title: "Song 5", artists: ["Artist 5", "Artist 6"], album: "Album 5"},
    {title: "Song 6", artists: ["Artist 6", "Artist 7"], album: "Album 6"},
    {title: "Song 7", artists: ["Artist 7", "Artist 8"], album: "Album 7"},
    {title: "Song 8", artists: ["Artist 8", "Artist 9"], album: "Album 8"},
    {title: "Song 9", artists: ["Artist 9", "Artist 10"], album: "Album 9"},
    {title: "Song 10", artists: ["Artist 10", "Artist 1"], album: "Album 10"},
]

let artists = [
    {name: "Artist 1", date_of_birth: "1-12-2022", genre: ["Rock", "POP"]},
    {name: "Artist 2", date_of_birth: "2-12-2022", genre: ["Rock", "POP"]},
    {name: "Artist 3", date_of_birth: "3-12-2022", genre: ["Rock", "POP"]},
    {name: "Artist 4", date_of_birth: "4-12-2022", genre: ["Rock", "POP"]},
    {name: "Artist 5", date_of_birth: "5-12-2022", genre: ["Rock", "POP"]},
    {name: "Artist 6", date_of_birth: "6-12-2022", genre: ["Rock", "POP"]},
    {name: "Artist 7", date_of_birth: "7-12-2022", genre: ["Rock", "POP"]},
    {name: "Artist 8", date_of_birth: "8-12-2022", genre: ["Rock", "POP"]},
    {name: "Artist 9", date_of_birth: "9-12-2022", genre: ["Rock", "POP"]},
    {name: "Artist 10", date_of_birth: "10-12-2022", genre: ["Rock", "POP"]},
]

let popular_song = [
    {title: "Song 1", times_played: 10, period_time: {start_date: "1-7-2023", end_date: "31-7-2023"}},
    {title: "Song 2", times_played: 9, period_time: {start_date: "2-7-2023", end_date: "1-8-2023"}},
    {title: "Song 3", times_played: 8, period_time: {start_date: "3-7-2023", end_date: "2-8-2023"}},
    {title: "Song 4", times_played: 7, period_time: {start_date: "4-7-2023", end_date: "3-8-2023"}},
    {title: "Song 5", times_played: 6, period_time: {start_date: "5-7-2023", end_date: "4-8-2023"}},
    {title: "Song 6", times_played: 5, period_time: {start_date: "6-7-2023", end_date: "5-8-2023"}},
    {title: "Song 7", times_played: 4, period_time: {start_date: "7-7-2023", end_date: "6-8-2023"}},
    {title: "Song 8", times_played: 3, period_time: {start_date: "8-7-2023", end_date: "7-8-2023"}},
    {title: "Song 9", times_played: 2, period_time: {start_date: "9-7-2023", end_date: "8-8-2023"}},
    {title: "Song 10", times_played: 1, period_time: {start_date: "10-7-2023", end_date: "9-8-2023"}},
]



function populate(songs){
    songs.forEach(song => {
        db.songs.insertOne(song)
    });
}

function populate(artists){
    artists.forEach(artist => {
        db.artists.insertOne(artist)
    });
}

function populate(popular_song){
    popular_song.forEach(song => {
        db.popular_song.insertOne(song)
    });
}


