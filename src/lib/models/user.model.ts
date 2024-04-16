import { UserPortalModel } from "./user-portal.model";
import { DocumentModel } from "./document.model";

export interface UserModel {
  id: number;
  email: string;
  phone: string;
  firstname: string;
  surname: string;
  lastname: string;
  birth_date?: Date | null;

  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;

  avatar_document_id: number | null;

  Avatar: DocumentModel;
  Portal: UserPortalModel;
}
