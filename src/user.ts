import { ExperienceType, NotificationType } from './notification';
import { ITeam } from './team';

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

/**
 * Represents a user's profile with basic information.
 */
export type UserProfile = {
  /**< Unique identifier for the user. */
  id: string;
  /**< Full name of the user. */
  name: string;
  /**< Email address of the user. */
  email: string;
};

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
