import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";
import { observer } from "mobx-react-lite"
import userStore from "../../lib/stores/user.store";

const DashboardLayout = observer(() => {
    userStore.fetchUser();

    return (
        <div className="flex h-screen overflow-hidden bg-zinc-100 dark:bg-zinc-800">
            <DashboardSidebar></DashboardSidebar>

            <main className="relative flex-1 overflow-y-auto bg-zinc-100 dark:bg-zinc-800">
                <header className="sticky top-0 z-10 border-b border-zinc-300/25 bg-white/75 p-6 backdrop-blur-md dark:border-zinc-800/50 dark:bg-zinc-900/75">Header</header>

                <section className="p-4">
                    <Outlet></Outlet>
                </section>

                <footer className="flex justify-between gap-4 p-6 text-sm text-zinc-500">
                    <span>Copyright © 2023</span>
                    <span className=""><b>Debug Divas</b> team</span>
                </footer>
            </main>
        </div>
    )
})

export default DashboardLayout;