import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from 'antd';

import {
    HiBars3,
    HiBars3BottomLeft,
    HiOutlineUserGroup,
    HiOutlineBookOpen,
    HiOutlineClipboardDocumentList,
    HiOutlineClipboardDocumentCheck,
    HiOutlineChatBubbleBottomCenterText,
    HiOutlineArrowRightOnRectangle
} from "react-icons/hi2";

const MENU = [
    {
        title: "Наша компания",
        href: "/dashboard",
        icon: HiOutlineUserGroup
    },
    {
        title: "Учебные материалы",
        href: "/dashboard/learning",
        icon: HiOutlineBookOpen
    },
    {
        title: "Мои тесты",
        href: "/",
        icon: HiOutlineClipboardDocumentList
    },
    {
        title: "Мои результаты",
        href: "/",
        icon: HiOutlineClipboardDocumentCheck
    },
    {
        title: "Мои обращения",
        href: "/",
        icon: HiOutlineChatBubbleBottomCenterText
    },
    {
        title: "Выйти из системы",
        href: "/",
        icon: HiOutlineArrowRightOnRectangle
    }
]

export default function DashboardSidebar() {
    const [toggled, setToggled] = useState(true);

    function getLinkClasses({ isActive }: { isActive: boolean }) {
        const classes = ["mb-2 p-3 flex items-center cursor-pointer overflow-hidden rounded-xl border text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-100 grow transition-all duration-300 ease-in-out border-transparent"]

        if (isActive) classes.push("border-zinc-300 text-zinc-950 dark:border-zinc-800 dark:text-zinc-100")

        return classes.join(" ");
    }

    return (
        <aside className={`left-0 top-0 z-10 py-6 flex h-screen flex-col overflow-y-hidden w-full border-zinc-300/25 bg-white dark:border-zinc-800/50 dark:bg-zinc-900 transition-all duration-300 ease-in-out ${toggled ? "max-w-[20rem]" : "max-w-[6.225rem]"}`}>
            <div className="flex items-center justify-between px-6 pb-6 gap-6">
                <Link to="/dashboard" className={`${!toggled && "hidden"}`}>
                    <img className="h-12" src="/vite.svg" alt="" />
                </Link>

                <button className="flex h-12 w-12 items-center justify-center" onClick={() => setToggled(!toggled)}>
                    {toggled ? <HiBars3BottomLeft className="text-2xl font-thin" /> : <HiBars3 className="text-2xl font-thin" />}
                </button>
            </div>

            <div>
                <ul className="px-6">
                    {MENU.map((item, key) => (
                        <li key={key} className="cursor-pointer flex list-none items-center overflow-hidden whitespace-nowrap">
                            <NavLink
                                className={getLinkClasses}
                                to={item.href}
                            >
                                <item.icon className="w-6 flex-none text-2xl me-3" />

                                <div className="flex w-full items-center justify-between truncate">
                                    <span className="overflow-hidden truncate whitespace-nowrap">{item.title}</span>
                                </div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}