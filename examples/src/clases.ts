export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  public title: string;
  public date: string;
  public orientation: PhotoOrientation;

  public constructor(config: {
    title: string;
    date: string;
    orientation: PhotoOrientation;
  }) {
    this.title = config.title;
    this.date = config.date;
    this.orientation = config.orientation;
  }

  //Comportamiento
  public toString() {
    return `[Picture: ${this.title}]`;
  }
}

class Album {
  public id: number;
  public title: string;
  public description: string;
  public pictures: Picture[];

  public constructor(config: {
    id: number;
    title: string;
    description: string;
    pictures?: Picture[];
  }) {
    this.id = config.id;
    this.title = config.title;
    this.description = config.description;
    this.pictures = config.pictures || [];
  }

  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album({
  id: 1,
  title: "Travels",
  description: "Wanderful pictures",
});

const picture: Picture = new Picture({
  title: "Tree",
  date: "2020-01-01",
  orientation: PhotoOrientation.Square,
});

album.addPicture(picture);

console.log(album);

//Accediendo a los miembros publicos

picture.title = "Sunset";

album.id = 2;
album.title = "Travels";
