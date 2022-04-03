export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  private _id: number;
  private _title: string;
  private _date: string;
  private _orientation: PhotoOrientation;

  public constructor(config: {
    _id: number;
    _title: string;
    _date: string;
    _orientation: PhotoOrientation;
  }) {
    this._id = config._id;
    this._title = config._title;
    this._date = config._date;
    this._orientation = config._orientation;
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  get orientation() {
    return this._orientation;
  }

  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation;
  }

  //Comportamiento
  public toString() {
    return `[Picture: ${this.title}]`;
  }
}

class Album {
  private _id: number;
  private _title: string;
  private _description: string;
  private _pictures: Picture[];

  public constructor(config: {
    id: number;
    title: string;
    description: string;
    pictures?: Picture[];
  }) {
    this._id = config.id;
    this._title = config.title;
    this._description = config.description;
    this._pictures = config.pictures || [];
  }

  get id() {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get title() {
    return this._title;
  }

  set title(title: string) {
    this._title = title;
  }

  public addPicture(picture: Picture) {
    this._pictures.push(picture);
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

//Accediendo a los miembros privados
console.log("id:", album.id); //get id

picture.title = "Sunset";
album.id = 2; //set id
album.title = "travels";
