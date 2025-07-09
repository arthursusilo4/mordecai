export interface User {
  id: string;
  nama: string;
  email: string;
  nomorTelepon: string;
  statusAktif: boolean;
  departemen: string;
  createdAt: Date;
  updatedAt: Date;
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