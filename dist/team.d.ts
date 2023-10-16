/** Team related interfaces **/
import { IUserResponse } from "./user";
export interface ITeam {
    id: string;
    name: string;
    description?: string;
    leader: IUserResponse;
    members?: IUserResponse[];
    country: string;
    tag: string;
    type: TeamType;
    wins?: number;
    points?: number;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}
export type TeamType = "invite_only" | "closed" | "open";
