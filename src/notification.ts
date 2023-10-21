/** Notifications related interfaces **/
import { IFileEntity, IUserResponse } from './user';
import { ITeam } from './team';
import { Identifiable, Timestamps } from './common';

export interface INotificationBase extends Identifiable, Timestamps {
  user: IUserResponse;
  type: 'system' | 'team_invite';
  read: boolean;
  expiresAt: Date;
}

// SystemNotification interface will have Notification fields also
export interface ISystemNotification extends INotificationBase {
  type: 'system'; // Discriminant property
  system_message: string;
}

// TeamInvitation interface will have Notification fields also
export interface ITeamInvitationNotification extends INotificationBase {
  type: 'team_invite'; // Discriminant property
  team: ITeam;
  from_user: IUserResponse;
  to_user_email: string;
  status: StatusType;
  photo: IFileEntity;
  message: string;
}

export type NotificationType = ISystemNotification | ITeamInvitationNotification;

export type StatusType = 'pending' | 'accepted' | 'rejected';
