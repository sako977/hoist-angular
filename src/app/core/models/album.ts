// Generated by https://quicktype.io

import { Artist } from './Artist';
import { PagingObject } from './PagingObject';
import { Track } from './Track';

export interface AlbumsSearchResponse{
  albums: PagingObject<Album>
}

export interface AlbumsResponse {
  albums: Album[];
}

export interface Album {
  album_type:             string;
  artists:                Artist[];
  available_markets:      string[];
  copyrights:             Copyright[];
  external_ids:           ExternalIDS;
  external_urls:          ExternalUrls;
  genres:                 any[];
  href:                   string;
  id:                     string;
  images:                 Image[];
  name:                   string;
  popularity:             number;
  release_date:           string;
  release_date_precision: string;
  tracks?:                 PagingObject<Track>;
  type:                   string;
  uri:                    string;
}

// type someKeys = 'id'|'name'|'images'
// type albumKeys = keyof Album
// type PartialAlbum = {
//   [k in albumKeys]?: Album[k]
// }
// type Partial<T> = {
//   [k in keyof T]?: T[k]
// }
// type Readonly<T> = {
//   readonly [k in keyof T]: T[k]
// }
// type PartialAlbum = Partial<Album>
// type PartialAlbum = Partial<Pick<Album,'id'|'name'>>

export interface ExternalUrls {
  spotify: string;
}

export interface Copyright {
  text: string;
  type: string;
}

export interface ExternalIDS {
  upc: string;
}

export interface Image {
  height: number;
  url:    string;
  width:  number;
}


