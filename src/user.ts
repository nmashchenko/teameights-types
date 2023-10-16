import { NotificationType } from './notification';
import { ITeam } from './team';
import { Identifiable, Linkable, NamedEntity, Timestamps, Nullable } from './common';

export enum ExperienceLevel {
  ZERO_TO_ONE = '0-1 years',
  ONE_TO_THREE = '1-3 years',
  THREE_TO_FIVE = '3-5 years',
  ABOVE_FIVE = '5+ years',
}

export interface IUserBase extends Timestamps {
  id: number;
  username: Nullable<string>;
  fullName: Nullable<string>;
  photo?: IFileEntity;
  role?: IRole;
  status: IStatus;
  isLeader: boolean; // Simplified
  country: Nullable<string>;
  dateOfBirth?: Date;
  concentration: Nullable<string>;
  description: Nullable<string>;
  experience: ExperienceLevel;
  programmingLanguages: Nullable<string[]>;
  frameworks: Nullable<string[]>;
  universities: IUniversity[];
  jobs: IJob[];
  projects: IProject[];
  links: ILinks;
  notifications: NotificationType[];
  team: ITeam[];
}

export interface IUserResponse extends IUserBase {}

export interface IUserProtectedResponse extends IUserBase {
  email: Nullable<string>;
  provider: string;
  socialId: Nullable<string>;
}

export interface IUserRequest {
  photo?: IFileEntity;
  fullName: string;
  username: Nullable<string>;
  password: string;
  isLeader: boolean;
  country: string;
  dateOfBirth?: Date;
  concentration: string;
  description: string;
  experience: ExperienceLevel;
  programmingLanguages: string[];
  frameworks: string[];
  universities: IUniversity[];
  jobs: IJob[];
  projects: IProject[];
  links: ILinks;
}

export interface IFindUserCriteria {
  fullName?: string;
  username?: string;
  isLeader?: boolean;
  country?: string;
  concentration?: string;
  experience?: ExperienceLevel;
  programmingLanguages?: string[];
  frameworks?: string[];
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

export interface IProject extends Linkable, Identifiable {
  title: string;
}

export interface ILinks extends Identifiable {
  github?: string;
  linkedIn?: string;
  behance?: string;
  telegram?: string;
}

export interface IJob extends Identifiable {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
}

export interface IUniversity extends Identifiable {
  name: string;
  degree: string;
  major: string;
  admissionDate: Date;
  graduationDate?: Date;
}
