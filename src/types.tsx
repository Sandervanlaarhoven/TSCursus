export enum Page {
  Info1 = "Uitleg deel 1",
  Index = "Index",
  Ass1 = "Opdracht 1",
  Ass2 = "Opdracht 2",
  Ass3 = "Opdracht 3",
  Ass4 = "Opdracht 4",
  Ass5 = "Opdracht 5",
  Ass6 = "Opdracht 6",
  Ass7 = "Opdracht 7",
  Ass8 = "Opdracht 8",
  Info2 = "Uitleg deel 2",
  Info3 = "Uitleg deel 3",
  Info4 = "Uitleg deel 4",
  Info5 = "Uitleg deel 5",
  Info6 = "Uitleg deel 6",
  Info7 = "Uitleg deel 7",
  Ass9 = "Opdracht 9",
  Ass10 = "Opdracht 10",
  Info8 = "Uitleg deel 8",
  Info9 = "Uitleg deel 9",
  Info10 = "Uitleg deel 10",
  ExampleAss10 = "Voorbeeld Opdracht 10",
  Example2Ass10 = "Voorbeeld 2 Opdracht 10",
  ExampleAss11 = "Voorbeeld Opdracht 11",
  ExampleAss12 = "Voorbeeld Opdracht 12",
  Ass11 = "Opdracht 11",
  Ass12 = "Opdracht 12",
}

export enum HairColor {
  Blond = "Blond",
  Black = "Zwart",
  Brown = "Bruin",
  Grey = "Grijs"
}

export interface Person {
  name: string;
  age?: number;
  weight?: number; // in kg
  height?: number; // in cm
  hairColor?: HairColor;
}

export enum DutchFlagColor {
  Red = "Rood",
  White = "Wit",
  Blue = "Blauw"
}
