export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

//Superclase
class Item {
  protected _id: number;
  protected _title: string;
  private _orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this._id = id;
    this._title = title;
    this._orientation = orientation;
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
}

class Picture extends Item {
  private _date: string;

  public constructor(config: {
    _id: number;
    _title: string;
    _date: string;
    _orientation: PhotoOrientation;
  }) {
    super(config._id, config._title, config._orientation); // contructor de la SUPER clase Item
    this._date = config._date;
  }

  //Comportamiento
  public toString() {
    return `[Picture: ${this.title}] ${this._date}`;
  }
}

class Album extends Item {
  private _description: string;
  private _pictures: Picture[];

  public constructor(config: {
    id: number;
    title: string;
    description: string;
    pictures?: Picture[];
  }) {
    super(config.id, config.title, PhotoOrientation.Square); // contructor de la SUPER clase Item
    this._description = config.description;
    this._pictures = config.pictures || [];
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
  _id: 1,
  _title: "Tree",
  _date: "2020-01-01",
  _orientation: PhotoOrientation.Square,
});

album.addPicture(picture);

console.log(album);

//Accediendo a los miembros privados
console.log("id:", album.id); //get id

picture.title = "Sunset";
album.id = 2; //set id
album.title = "travels";

const item = new Item(1, "title", PhotoOrientation.Square);
console.log(item);
