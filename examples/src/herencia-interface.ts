export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  description: string;
}

interface Picture extends Entity {
  orientation: PhotoOrientation;
}

const album: Album = {
  id: 1,
  title: "Travels",
  description: "Wanderful pictures",
};

const picture: Picture = {
  id: 2,
  title: "Tree",
  orientation: PhotoOrientation.Square,
};

let newPicture = {} as Picture;
newPicture.id = 3;
newPicture.title = "Sunset";
newPicture.orientation = PhotoOrientation.Panorama;

console.log(album);
console.log(picture);
console.log(newPicture);
