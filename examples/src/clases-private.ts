export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  private title: string;
  private date: string;
  private orientation: PhotoOrientation;

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
  private id: number;
  private title: string;
  private description: string;
  private pictures: Picture[];

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

// picture.title = "Sunset"; error private property

// album.id = 2; error private property
// album.title = "Travels"; error private property
