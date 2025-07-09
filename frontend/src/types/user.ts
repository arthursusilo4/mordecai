export interface User {
  id: string;
  nama: string;
  email: string;
  nomorTelepon: string;
  statusAktif: boolean;
  departemen: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUserRequest {
  nama: string;
  email: string;
  nomorTelepon: string;
  statusAktif: boolean;
  departemen: string;
}

export interface UpdateUserRequest {
  nama?: string;
  email?: string;
  nomorTelepon?: string;
  statusAktif?: boolean;
  departemen?: string;
}