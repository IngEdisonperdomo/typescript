enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

function showPicture(picture: Picture) {
  console.log(
    `title: ${picture.title} date: ${picture.date} orientation: ${picture.orientation}`
  );
}

let myPicture = {
  title: "Me and Bears",
  date: "2020-01-01",
  orientation: PhotoOrientation.Square,
};

showPicture(myPicture);
showPicture({
  title: "Me and Bears",
  date: "2020-01-01",
  orientation: PhotoOrientation.Square,
});

//interface with parameter properties optional
interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

function generatePicture(config: PictureConfig) {
  let title = config.title || "no title";
  let date = config.date || "no date";
  let orientation = config.orientation || PhotoOrientation.Square;
  console.log(`title: ${title} date: ${date} orientation: ${orientation}`);
}

generatePicture({});
generatePicture({ title: "Me and Bears" });

//Interface with readonly properties
interface User {
  readonly id: number; //readonly properties can only be set in the constructor
  username: string;
  isPro: boolean;
}

let userI: User;
userI = { id: 10, username: "John", isPro: true };
userI.username = "Pete";
// userI.id = 20; //error id only readonly
