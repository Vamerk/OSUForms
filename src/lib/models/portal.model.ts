import { DocumentModel } from "./document.model";
import { UserPortalModel } from "./user-portal.model";

export interface PortalModel {
  id: number;
  name: string;
  inn: string;

  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;

  logo_document_id?: number | null;

  LogoDocument?: DocumentModel | null;
  UserPortal?: UserPortalModel[] | null;
}
