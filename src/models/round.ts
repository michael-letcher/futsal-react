import { Game } from "./game";

export interface Round {
  round: number;
  games: Game[];
}
