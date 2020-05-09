import gql from 'graphql-tag'

export const addSong = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
    }
  }
`

export const deleteSong = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`

export const addLyric = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      title
      lyrics {
        id
        content
      }
    }
  }
`

export const likeLyric = gql`
  mutation LikeLyric($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`
