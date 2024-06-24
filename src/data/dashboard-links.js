import { ACCOUNT_TYPE } from "./constants";

export const sidebarLinks = [
  {
    id: 1,
    name: "My Profile",
    path: "/dashboard/my-profile",
    icon: "VscAccount",
  },
  // {
  //   id: 2,
  //   name: "Dashboard",
  //   path: "/dashboard/mess-owner",
  //   type: ACCOUNT_TYPE.MessOwner,
  //   icon: "VscDashboard",
  // },
  {
    id: 3,
    name: "My Posts",
    path: "/dashboard/my-posts",
    type: ACCOUNT_TYPE.MessOwner,
    icon: "VscVm",
  },
  {
    id: 4,
    name: "Add Post",
    path: "/dashboard/add-post",
    type: ACCOUNT_TYPE.MessOwner,
    icon: "VscAdd",
  },

];