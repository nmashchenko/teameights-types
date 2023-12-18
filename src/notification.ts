/** Notifications related interfaces **/
import { IUserResponse } from './user';
import { Identifiable, Timestamps } from './common';

interface INotificationBase extends Identifiable, Timestamps {
  receiver: IUserResponse;
  // can extend more with | operator
  type: 'system';
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

/* can have more notification types after that */
