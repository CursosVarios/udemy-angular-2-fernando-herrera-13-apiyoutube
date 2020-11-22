export interface AnswerYoutubeModel {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  items: ItemModel[];
  pageInfo: PageInfo;
}

export interface ItemModel {
  kind: string;
  etag: string;
  id: string;
  snippet: VideoModel;
}

export interface VideoModel {
  publishedAt: Date;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceID;
}

export interface ResourceID {
  kind: string;
  videoId: string;
}

export interface Thumbnails {
  default: Default;
  medium: Default;
  high: Default;
  standard: Default;
  maxres?: Default;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
