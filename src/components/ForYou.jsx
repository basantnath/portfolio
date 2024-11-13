export default function ForYou() {
  return (
    <div className="container text-center">
      <h2 className="s-p-button mb-3">Feel the Beat </h2>
      <p className="pro-con-heading text-spotlight mb-3">
        Here's what I'm currently listening to:{" "}
      </p>
      <div className="mb-6 select-none">
        <iframe
          style={{ borderRadius: "0px" }}
          src="https://open.spotify.com/embed/playlist/4g6KycQ9JL1IvyNboEF6jH?utm_source=generator"
          width="100%"
          height="400"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          title="Vibes, Beats & Everything In Between"
        ></iframe>
      </div>
    </div>
  );
}
