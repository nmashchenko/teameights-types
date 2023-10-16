// Type definitions for Teameights 1.0.4
// Project: https://teameights.com
// Definitions by: Nikita Mashchenko <https://mashchenko.tech>

/** User related interfaces **/
// Base user returned

export interface IResetPassword {
  password: string;
  hash: string;
}

export interface IRegisterLogin {
  email: string;
  password: string;
}

export interface IGithubLogin {
  code: string;
}

export interface IGoogleLogin {
  idToken: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IConfirmEmail {
  hash: string;
}

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
  experience?: ExperienceType | null;
  programmingLanguages?: string[] | null;
  frameworks?: string[] | null;
  universities?: IUniversities[];
  jobs?: IJobs[];
  projects?: IProjects[];
  links?: ILinks;
  notifications?: NotificationType[];
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
  experience?: ExperienceType;
  programmingLanguages?: string[];
  frameworks?: string[];
  universities?: IUniversities[];
  jobs?: IJobs[];
  projects?: IProjects[];
  links?: ILinks;
}

export interface IFindUser {
  fullName?: string;
  username?: string;
  isLeader?: boolean;
  country?: string;
  concentration?: string;
  experience?: ExperienceType;
  programmingLanguages?: string[];
  frameworks?: string[];
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
export interface IProjects {
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
export interface IJobs {
  id: number;
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
}

export interface IUniversities {
  id: number;
  university: string;
  degree: string;
  major: string;
  admissionDate: Date;
  graduationDate?: Date;
}

/** Team related interfaces **/

// Base view for now
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

// Type of teams
export type TeamType = "invite_only" | "closed" | "open";

/** Notifications related interfaces **/

export interface INotificationBase {
  id?: number;
  user: IUserResponse;
  type: "system" | "team_invite";
  read: boolean;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

// SystemNotification interface will have Notification fields also
export interface ISystemNotification extends INotificationBase {
  system_message: string;
}

// TeamInvitation interface will have Notification fields also
export interface ITeamInvitationNotification extends INotificationBase {
  teamid: ITeam;
  from_user_id: IUserResponse;
  to_user_email: string;
  status: StatusType;
  image: string;
  message: string;
}

export type NotificationType =
  | INotificationBase
  | ISystemNotification
  | ITeamInvitationNotification;

export type StatusType = "pending" | "accepted" | "rejected";

export type ExperienceType =
  | "0-1 years"
  | "1-3 years"
  | "3-5 years"
  | "5+ years";
