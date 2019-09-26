import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// Accéder à des objets dynamiquement
const SOCIAL_NETWORK = "twitter";

const francine = {
  firstName: "Francine",
  location: "Drôme",
  [SOCIAL_NETWORK]: "@FrancineDu26"
};

// <=> console.log(francine.twitter)
console.log("social network", francine[SOCIAL_NETWORK]);

/**
 * Destructuring
 */
const francine2 = {
  firstName: "Francine",
  location: "Drôme",
  twitter: "@FrancineDu26"
};

console.log("** location from destructuring **");
console.log(francine2.location);
const { location, twitter } = francine2;
console.log(location);
console.log(twitter);
console.log({ location });

// transforme le nom de la clé
const { firstName: prenom } = francine2;
console.log(prenom);
