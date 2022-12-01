import { InferGetStaticPropsType } from "next";

export interface GetCharactersResults {
  info: Info;
  results: Characters[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface Characters {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: Date;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string;
  url: string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

// Converts JSON strings to/from your types
export class Convert {
  public static toWelcome(json: string): Welcome[] {
    return JSON.parse(json);
  }

  public static welcomeToJson(value: Welcome[]): string {
    return JSON.stringify(value);
  }
}
