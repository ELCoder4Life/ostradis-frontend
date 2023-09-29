export default function YoutubeVideo({ videoId }) {
  // Construct the YouTube video URL
  const youtubeUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <iframe
      width="900"
      height="560"
      src={youtubeUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      allowfullscreen
    ></iframe>
  );
}
