export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  salt: string;
  isSU: boolean;
  created_at: Date;
  updated_at: Date | null;
  last_login: Date | null;
};

export type UserWithoutSensitiveInfo = Omit<User, 'id' | 'created_at' | 'updated_at' | 'last_login'>;

export type UserPasswordReset = {
  user_id: number;
  resetToken: string;
  isCompleted: boolean | null;
  send_at: Date | null;
};