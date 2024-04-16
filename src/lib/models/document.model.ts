import { UserModel } from "./user.model";

export interface DocumentModel {
  id: number;
  title: string;
  description: string;
  filename: string;
  url: string;

  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;

  Users?: UserModel;
}
