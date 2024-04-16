import api from "../../api";
import { UserModel } from "../../lib/models/user.model";
import { makeAutoObservable } from "mobx";

class UserStore {
  user: UserModel | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  set(user: UserModel) {
    this.user = user;
  }

  reset() {
    this.user = null;
  }

  async fetchUser() {
    const accessToken = localStorage.getItem("accessToken");

    if (accessToken) {
      const response = await api.get("user/me");

      this.set(response.data);
    }
  }
}

const userStore = new UserStore();
export default userStore;
