var library = {
    tracks: { t01: { id: "t01",
                     name: "Hail Mary",
                     artist: "2pac",
                     album: "The Don Killuminati" },
              t02: { id: "t02",
                     name: "Juicy",
                     artist: "Notorious BIG",
                     album: "Ready to Die"},
              t03: { id: "t03",
                     name: "Seed 2.0",
                     artist: "The Roots",
                     album: "Pherenology"}
            },
    playlists: { p01: { id: "p01",
                        name: "Coding Music",
                        tracks: ["t01", "t02"]
                      },
                 p02: { id: "p02",
                        name: "Other Playlist",
                        tracks: ["t03"]
                      }
               }
  }
  
  // FUNCTIONS TO IMPLEMENT:
  
  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks
  
    var printPlaylists = function () {
     for (var playlist in library.playlists) {
        var playlistIds = library.playlists[playlist]
        //console.log(playlistIds.name) 
      }
  } 
 printPlaylists() 
  
  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)
  
  var printTracks = function () {
    for (var tracklists in library.tracks) {
        var theTracks = library.tracks[tracklists]
      //  console.log(theTracks.name)
    }
  }
  printTracks()
  
  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  
  //create variables for playlist and tracks//

  var printPlaylist = function (playlistId) {
    var playID = library.playlists[playlistId]
    var playname = playID.name;
    var playlisttracks = playID.tracks.length

    for (var i of playID.tracks){
        var trackname = library.tracks[i].name;
        var artistname = library.tracks[i].artist;
        var albumname = library.tracks [i].album;
        console.log(trackname)
    }

    console.log(trackname + " by " + artistname + " (" + albumname + ")")
  }
  printPlaylist('p01')
  
  // adds an existing track to an existing playlist
  
  var addTrackToPlaylist = function (trackId, playlistId) {
    console.log(addTrackToPlaylist)
  }
  
  
  // generates a unique id
  // (use this for addTrack and addPlaylist)
  
  var uid = function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  
  
  // adds a track to the library
  
  var addTrack = function (name, artist, album) {
  
  }
  
  
  // adds a playlist to the library
  
  var addPlaylist = function (name) {
  
  }
  
  
  // STRETCH:
  // given a query string string, prints a list of tracks
  // where the name, artist or album contains the query string (case insensitive)
  // tip: use "string".search("tri") 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
  
  var printSearchResults = function(query) {
  
  }