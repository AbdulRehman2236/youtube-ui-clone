export const GET_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=20&key=";

export const GET_VIDEO_DETAILS_API = (videoId, apiKey) => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`;
};

export const GET_SEARCH_VIDEOS_API = (keyword, apiKey) => {
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${keyword}&key=${apiKey}`;
};

export const GET_VIDEO_LIST_BY_IDS = (videoList, apiKey) => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoList}&key=${apiKey}`;
};
