const photo = <img src="./khathera.jpg" id="pic" />;
const information = (
  <div id="theHead">
    <h1>Khathera Rezaie</h1>
    <h4>Front Developer</h4>
    <p>Helmand Afghanistan</p>
  </div>
);
const socialMedia = (
  <div>
    <button className="buttons" id="emailLink">
      Email
    </button>
    <button className="buttons" id="linkedinLink">
      Linkedin
    </button>
  </div>
);
const aboutUser = (
  <div>
    <h2>About</h2>
    <p className="paragraph">
      I am khathera Rezaie, currently living in Lashkargah city and studing
      online. I was studying computer science in Kabul Polyticnic univercity, I
      have joind in a couple of awesome bootcomps and learned many thing about
      coding I am a front end developer and can code in HTML,JS, CSS, React,
      node.js
    </p>
  </div>
);
const interest = (
  <div>
    <h2>Interests</h2>
    <p className="paragraph">
      I love to code.code,sleep,coffee and reapet I love to work in beg
      companies and someday make my own company.I am interested in reading books
      and love to listen to music and my play list.
    </p>
  </div>
);
const end = (
  <div id="icons">
    <a href="#" className="fa fa-facebook">
      facebook
    </a>
    <a href="#" className="fa fa-twitter">
      X
    </a>
  </div>
);
ReactDOM.createRoot(document.getElementById("picture")).render(photo);
ReactDOM.createRoot(document.getElementById("city")).render(information);
ReactDOM.createRoot(document.getElementById("socialMediaLink")).render(
  socialMedia
);
ReactDOM.createRoot(document.getElementById("about")).render(aboutUser);
ReactDOM.createRoot(document.getElementById("interests")).render(interest);
ReactDOM.createRoot(document.getElementById("footer")).render(end);
