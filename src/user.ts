import { NotificationType } from './notification';
import { ITeam } from './team';

/**
 * Represents the structure of a User's data response.
 * @property {number} id - Unique ID of the user.
 * @property {string|null} [username] - User's chosen username.
 * @property {string|null} [fullName] - User's full name.
 * @property {IFileEntity|null} [photo] - User's profile photo.
 * @property {IRole|null} [role] - User's assigned role.
 * @property {IStatus} [status] - User's account status.
 * @property {boolean|null} [isLeader] - Indicates if the user is a team leader.
 * @property {string|null} [country] - Country of residence for the user.
 * @property {Date|null} [dateOfBirth] - User's date of birth.
 * @property {string|null} [concentration] - User's area of concentration or expertise.
 * @property {string|null} [description] - Short bio or description about the user.
 * @property {ExperienceType|null} [experience] - User's professional experience range.
 * ... other properties ...
 */
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
/**
 * Represents a protected view of the User's data response.
 * This is typically used when sensitive information is required.
 */
export interface IUserProtectedResponse extends IUserResponse {
  email?: string | null;
  provider: string;
  socialId?: string | null;
}

/**
 * Represents the data structure for user request details.
 *
 * @property {IFileEntity} [photo] - Optional reference to the user's profile photo.
 * @property {string} [fullName] - Optional full name of the user.
 * @property {string|null} [username] - Optional username. Can be `null` if not provided.
 * @property {string} password - User's password.
 * @property {boolean} [isLeader] - Optional flag indicating if the user is a leader or not.
 * @property {string} [country] - Optional user's country of residence.
 * @property {Date} [dateOfBirth] - Optional date of birth of the user.
 * @property {string} [concentration] - Optional area of expertise or focus for the user.
 * @property {string} [description] - Optional short description or bio about the user.
 * @property {ExperienceType} experience - Professional experience range of the user.
 * @property {string[]} [programmingLanguages] - Optional list of programming languages known by the user.
 * @property {string[]} [frameworks] - Optional list of frameworks the user is proficient in.
 * @property {IUniversities[]} [universities] - Optional list of universities attended by the user.
 * @property {IJobs[]} [jobs] - Optional list of jobs held by the user.
 * @property {IProjects[]} [projects] - Optional list of projects undertaken by the user.
 * @property {ILinks} [links] - Optional list of links associated with the user e.g., social media or portfolios.
 */
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

export type ExperienceType = '0-1 years' | '1-3 years' | '3-5 years' | '5+ years';
