import { NotificationType } from './notification';
import { ITeam } from './team';
import { Identifiable, Linkable, NamedEntity, Timestamps, Nullable } from './common';

export enum ExperienceLevel {
  ZERO_TO_ONE = '0-1 years',
  ONE_TO_THREE = '1-3 years',
  THREE_TO_FIVE = '3-5 years',
  ABOVE_FIVE = '5+ years',
}

export interface UserBase extends Timestamps {
  id: number;
  username: Nullable<string>;
  fullName: Nullable<string>;
  photo?: FileEntity;
  role?: Role;
  status: Status;
  isLeader: boolean; // Simplified
  country: Nullable<string>;
  dateOfBirth?: Date;
  concentration: Nullable<string>;
  description: Nullable<string>;
  experience: ExperienceLevel;
  programmingLanguages: Nullable<string[]>;
  frameworks: Nullable<string[]>;
  universities: University[];
  jobs: Job[];
  projects: Project[];
  links: Links;
  notifications: NotificationType[];
  team: ITeam[];
}

export interface UserResponse extends UserBase {}

export interface UserProtectedResponse extends UserBase {
  email: Nullable<string>;
  provider: string;
  socialId: Nullable<string>;
}

export interface UserRequest {
  photo?: FileEntity;
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
  universities: University[];
  jobs: Job[];
  projects: Project[];
  links: Links;
}

export interface FindUserCriteria {
  fullName?: string;
  username?: string;
  isLeader?: boolean;
  country?: string;
  concentration?: string;
  experience?: ExperienceLevel;
  programmingLanguages?: string[];
  frameworks?: string[];
}

export interface FileEntity {
  id: string;
  path: string;
}

export type Status = NamedEntity;

export type Role = NamedEntity;

export interface Project extends Linkable {
  title: string;
}

export interface Links {
  id: number;
  github?: string;
  linkedIn?: string;
  behance?: string;
  telegram?: string;
}

export interface Job extends Identifiable {
  title: string;
  company: string;
  startDate: Date;
  endDate?: Date;
}

export interface University extends Identifiable {
  name: string;
  degree: string;
  major: string;
  admissionDate: Date;
  graduationDate?: Date;
}
