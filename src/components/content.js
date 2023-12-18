function Content() {

  // Styling for the main content area
  const pageStyle = {
    backgroundColor: '#f0f0f0', // Set your desired background color here
    padding: '20px', // Optional: Add padding for better visual appeal
  };

  return (
    <div style={pageStyle}>
      <div>
        <h1>Welcome to Our UFC Hub!</h1>
        <p>Explore the world of UFC:</p>
        <br></br><br></br>

        {/* Press Conference */}
        <div>
          <h2>Press Conference</h2>
          <h4>Check out the latest press conference from UFC 296.</h4>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ehW_A_g9Sj4?si=W-naxRQ5Leyaq6zE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <br></br><br></br>

        {/* UFC Fighters Spotlight */}
        <div>
          <h2>Fighter Spotlight</h2>
          <h3>Jon Jones.</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ebeQBYvWKsw?si=A8wcJve-XokBqxqU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <br></br><br></br>

        {/* Embedded Video - UFC Promo */}
        <div>
          <h2>UFC Promo</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aUhV44ZUIo4?si=5GuCtNEKLTHRhJmv"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <br></br><br></br>

        {/* UFC Hall of Shame */}
        <div>
          <h2>UFC Hall of Shame</h2>
          <h4>Celebrating the losers of the sport. Explore the UFC Hall of shame.</h4>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YJMIvFe9OZg?si=QPwDUdDdjZ7-L_Z2"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <br></br><br></br>

        {/* Displaying the current time */}
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <br></br><br></br>
      </div>
    </div>
  );
}

export default Content;
