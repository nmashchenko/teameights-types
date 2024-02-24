/** Notifications related interfaces **/
import { IUserResponse } from './user';
import { Identifiable, Timestamps } from './common';

export type INotificationType = 'system' | 'friend_request';

interface INotificationBase extends Identifiable, Timestamps {
  receiver: IUserResponse;
  // can extend more with | operator
  type: INotificationType;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// SystemNotification interface will have Notification fields also
export interface ISystemNotification extends INotificationBase {
  type: 'system'; // Discriminant property
  data: {
    system_message: string;
  };
}

export interface IFriendNotification extends INotificationBase {
    type: 'friend_request';
    data: {
        status: string;
        creator: IUserResponse;
    };
}


/* NB: don't forget to update if new types are added */
export type NotificationType = ISystemNotification | IFriendNotification;

/* can have more notification types after that */
