export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  #title: string;
  #date: string;
  #orientation: PhotoOrientation;

  public constructor(config: {
    title: string;
    date: string;
    orientation: PhotoOrientation;
  }) {
    this.#title = config.title;
    this.#date = config.date;
    this.#orientation = config.orientation;
  }

  //Comportamiento
  public toString() {
    return `[Picture: ${this.#title}]`;
  }
}
