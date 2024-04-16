import { Outlet } from "react-router-dom";

export default function AuthLayout() {
    return (
        <main className="h-screen p-5">
            <div className="max-w-lg relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Outlet />
            </div>
        </main>
    )
}