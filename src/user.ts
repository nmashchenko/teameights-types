import { Identifiable, Timestamps, Nullable } from './common';

export type ExperienceType =
  | 'No experience'
  | 'Few months'
  | '1 year'
  | '2 years'
  | '3 years'
  | '4 years'
  | '5+ years';

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
  description: Nullable<string>;
  experience: ExperienceType;
  universities: IUniversity[];
  jobs: IJob[];
  projects: IProject[];
  links: Nullable<ILinks>;
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
  description?: string;
  experience?: ExperienceType;
  universities?: IUniversity[];
  jobs?: Omit<IJob, 'id'>[];
  projects?: Omit<IProject, 'id'>[];
  links?: Omit<ILinks, 'id'>;
  skills?: Omit<ISkills, 'id'>;
}

/**
 * Fields that user can inlcude in query
 */
export interface IFindUserCriteria {
  fullName?: string;
  username?: string;
  isLeader?: boolean;
  countries?: string[];
  specialities?: string[];
  focuses?: string[];
  experience?: ExperienceType;
  coreTools?: string[];
  additionalTools?: string[];
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

interface ISkills extends Identifiable {
  __type: 'dev' | 'designer' | 'pm';
  speciality: string;
  focus: string;
  coreTools: string[];
  additionalTools?: Nullable<string[]>;
}
