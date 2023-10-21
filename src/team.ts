/** Team related interfaces **/
import { Identifiable, Nullable, Timestamps } from './common';
import { IFileEntity, IUserResponse } from './user';

// Base view for now
export interface ITeam extends Timestamps, Identifiable {
  name: string;
  description: Nullable<string>;
  leader: IUserResponse;
  members: IUserResponse[];
  country: string;
  tag: string;
  type: TeamType;
  wins: number;
  points: number;
  photo: Nullable<IFileEntity>;
}

// Type of teams
export type TeamType = 'invite_only' | 'closed' | 'open';
