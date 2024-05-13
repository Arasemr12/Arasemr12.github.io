export type Spotify = {
    track_id: String | undefined,
    timestamps:{
        start: Number | undefined,
        end: Number | undefined,
    },
    album: String | undefined,
    album_art_url: String | undefined,
    artist: String | undefined,
    song: String | undefined,
};
