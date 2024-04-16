import { UserModel } from "./user.model";
import { PortalModel } from "./portal.model";

export interface UserPortalModel {
  role: "WORKER" | "MANAGER" | "OWNER";

  created_at: Date;
  updated_at: Date;
  deleted_at?: Date | null;

  user_id: number;
  portal_id: number;

  User?: UserModel | null;
  Portal?: PortalModel | null;
}
