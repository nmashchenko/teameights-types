// Type definitions for Teameights 1.0
// Project: https://teameights.com
// Definitions by: Nikita Mashchenko <https://mashchenko.tech>

/** User related interfaces **/
// Base user returned
export interface IUserResponse {
  id: number;
  username?: string | null;
  fullName?: string | null;
  photo?: IFileEntity | null;
  role?: IRole | null;
  status?: IStatus;
  isLeader?: boolean | null;
  country?: string | null;
  dateOfBirth?: Date | null;
  concentration?: string | null;
  description?: string | null;
  experience?: string | null;
  programmingLanguages?: string[] | null;
  frameworks?: string[] | null;
  universityData?: IUniversityData[];
  jobData?: IJobData[];
  projectData?: IProjectData[];
  links?: ILinks;
  notifications?: (
    | INotification
    | ISystemNotification
    | ITeamInvitationNotification
  )[];
  team?: ITeam[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

// Will be returned when admin endpoint is called or user calls /me
export interface IUserProtectedResponse extends IUserResponse {
  email?: string | null;
  provider: string;
  socialId?: string | null;
}

export interface IUserRequest {
  photo?: IFileEntity;
  fullName?: string;
  username?: string | null;
  password?: string;
  isLeader?: boolean;
  country?: string;
  dateOfBirth?: Date;
  concentration?: string;
  description?: string;
  experience?: "0-1 years" | "1-3 years" | "3-5 years" | "5+ years";
  programmingLanguages?: string[];
  frameworks?: string[];
  universityData?: IUniversityData[];
  jobData?: IJobData[];
  projectData?: IProjectData[];
  links?: ILinks;
}

export interface IFileEntity {
  id: string;
  path: string;
}

export interface IStatus {
  id: number;
  name?: string;
}

export interface IRole {
  id: number;
  name?: string;
}

// ProjectData
export interface IProjectData {
  id: number;
  title: string;
  link: string;
}

// Links
export interface ILinks {
  id: number;
  github?: string;
  linkedIn?: string;
  behance?: string;
  telegram?: string;
}

// Job data
export interface IJobData {
  id: number;
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
}

export interface IUniversityData {
  id: number;
  university: string;
  degree: string;
  major: string;
  admissionDate: Date;
  graduationDate: Date;
}

/** Team related interfaces **/

// Base view for now
export interface ITeam {
  id?: string;
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

// Type of teams
export type TeamType = "invite-only" | "closed" | "open";

/** Notifications related interfaces **/

export interface INotification {
  id?: number;
  user: IUserResponse;
  type: NotificationType;
  read: boolean;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export type NotificationType = "system" | "team_invite";

// SystemNotification interface will have Notification fields also
export interface ISystemNotification extends INotification {
  system_message: string;
}

// TeamInvitation interface will have Notification fields also
export interface ITeamInvitationNotification extends INotification {
  teamid: ITeam;
  from_user_id: IUserResponse;
  to_user_email: string;
  status: InvitationStatus;
  image: string;
  message: string;
}

export type InvitationStatus = "pending" | "accepted" | "rejected";
