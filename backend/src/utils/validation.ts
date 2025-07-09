import { CreateUserRequest, UpdateUserRequest } from "../types/user";

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\d{10,}$/;
  return phoneRegex.test(phone);
};

export const validateCreateUser = (data: CreateUserRequest): string[] => {
  const errors: string[] = [];

  if (!data.nama || data.nama.trim().length < 2) {
    errors.push("Nama must be at least 2 characters long");
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push("Valid email is required");
  }

  if (!data.nomorTelepon || !validatePhoneNumber(data.nomorTelepon)) {
    errors.push("Phone number must be at least 10 digits");
  }

  if (!data.departemen || data.departemen.trim().length < 2) {
    errors.push("Departemen must be at least 2 characters long");
  }

  return errors;
};

export const validateUpdateUser = (data: UpdateUserRequest): string[] => {
  const errors: string[] = [];

  if (data.nama && data.nama.trim().length < 2) {
    errors.push("Nama must be at least 2 characters long");
  }

  if (data.email && !validateEmail(data.email)) {
    errors.push("Valid email is required");
  }

  if (data.nomorTelepon && !validatePhoneNumber(data.nomorTelepon)) {
    errors.push("Phone number must be at least 10 digits");
  }

  if (data.departemen && data.departemen.trim().length < 2) {
    errors.push("Departemen must be at least 2 characters long");
  }

  return errors;
};
