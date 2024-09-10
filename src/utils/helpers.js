export const getViewsCount = (views) => {
  if (views.length <= 6) {
    return `${(views / 1000).toFixed(2)}K`;
  } else {
    return `${(views / 1000000).toFixed(2)}M`;
  }
};

export const timeSincePublished = (publishedDate) => {
  const published = new Date(publishedDate);
  const now = new Date();
  const seconds = Math.floor((now - published) / 1000);

  const years = Math.floor(seconds / (365 * 24 * 60 * 60));
  const months = Math.floor(seconds / (30 * 24 * 60 * 60));
  const days = Math.floor(seconds / (24 * 60 * 60));
  const hours = Math.floor(seconds / (60 * 60));
  const minutes = Math.floor(seconds / 60);

  if (years > 0) return years === 1 ? "1 year ago" : `${years} years ago`;
  if (months > 0) return months === 1 ? "1 month ago" : `${months} months ago`;
  if (days > 0) return days === 1 ? "1 day ago" : `${days} days ago`;
  if (hours > 0) return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  if (minutes > 0) return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  return "Just now";
};

export const formatDuration = (duration) => {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;

  const matches = duration.match(regex);

  const hours = parseInt(matches[1] || "0", 10);
  const minutes = parseInt(matches[2] || "0", 10);
  const seconds = parseInt(matches[3] || "0", 10);

  const formattedHours = hours > 0 ? `${hours}:` : "";
  const formattedMinutes = minutes < 10 && hours > 0 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedHours}${formattedMinutes}:${formattedSeconds}`;
};
