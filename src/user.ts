import { NotificationType } from './notification';
import { ITeam } from './team';
import { Identifiable, Timestamps, Nullable } from './common';

export type ExperienceType =
  | 'No experience'
  | 'Few months'
  | '1 year'
  | '2 years'
  | '3 years'
  | '4 years'
  | '5+ years';

export type SkillsType = 'developer' | 'designer' | 'pm';

export interface IUserBase extends Timestamps {
  id: number;
  username: string;
  fullName: string;
  photo: Nullable<IFileEntity>;
  role: IRole;
  status: IStatus;
  isLeader: boolean; // Simplified
  country: string;
  dateOfBirth: Date;
  concentration: string;
  description: Nullable<string>;
  experience: ExperienceType;
  programmingLanguages: string[];
  frameworks: string[];
  universities: IUniversity[];
  jobs: IJob[];
  projects: IProject[];
  links: Nullable<ILinks>;
  notifications: NotificationType[];
  team: Nullable<ITeam>;
  skills: Nullable<ISkills>;
}

/**
 * Active user's public data
 */
export interface IUserResponse extends IUserBase {}

/**
 * User's personal data that he can obtain from /me
 */
export interface IUserProtectedResponse extends IUserBase {
  email: Nullable<string>;
  provider: string;
  socialId: Nullable<string>;
}

/**
 * Fields that user can obtain by PATCH to /me
 */
export interface IUserRequest {
  photo?: IFileEntity;
  fullName?: string;
  username?: string;
  password?: string;
  isLeader?: boolean;
  country?: string;
  dateOfBirth?: Date;
  concentration?: string;
  description?: string;
  experience?: ExperienceType;
  programmingLanguages?: string[];
  frameworks?: string[];
  universities?: IUniversity[];
  jobs?: IJob[];
  projects?: IProject[];
  links?: ILinks;
  skills?: IDesigner | IDeveloper | IProjectManager;
}

/**
 * Fields that user can inlcude in query
 */
export interface IFindUserCriteria {
  fullName?: string;
  username?: string;
  isLeader?: boolean;
  country?: string;
  concentration?: string;
  experience?: ExperienceType;
  skills: {
    programmingLanguages?: string[];
    frameworks?: string[];
    fields?: string[];
    tools?: string[];
  };
}

export interface IFileEntity extends Identifiable {
  path: string;
}

export interface IStatus extends Identifiable {
  name?: string;
}

export interface IRole extends Identifiable {
  name?: string;
}

export interface IProject extends Identifiable {
  title: string;
  link: string;
}

export interface ILinks extends Identifiable {
  github: Nullable<string>;
  linkedIn: Nullable<string>;
  behance: Nullable<string>;
  telegram: Nullable<string>;
}

export interface IJob extends Identifiable {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Nullable<Date>;
}

export interface IUniversity extends Identifiable {
  name: string;
  degree: string;
  major: string;
  admissionDate: Date;
  graduationDate?: Nullable<Date>;
}

export interface ISkills extends Identifiable {
  tools?: Nullable<Array<String>>;
  fields?: Nullable<Array<String>>;
  programmingLanguages?: Nullable<Array<String>>;
  frameworks?: Nullable<Array<String>>;
}

export interface IDesigner {
  type: 'designer';
  fields?: string[];
  tools?: string[];
}

export interface IDeveloper {
  type: 'developer';
  programmingLanguages?: string[];
  frameworks?: string[];
}

export interface IProjectManager {
  type: 'pm';
  frameworks?: string[];
  tools?: string[];
}
