export type RegistrationFields = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export type RegistrationFieldsUsed = Omit<RegistrationFields, 'confirmPassword'>;

export type AuthenticationFields = {
  email: string;
  password: string;
}