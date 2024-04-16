import SignInForm from "./SignInForm"
import { Link } from "react-router-dom";

export default function SignInPage() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <img src="/img/osu_sign.png" className="h-20" alt="" />
            </div>

            <div>
                <h2 className="text-4xl font-semibold">Авторизация</h2>
            </div>

            <div>
                <p>Войдите в свой аккаунт.</p>
            </div>

            <div className="border border-zinc-500/25 dark:border-zinc-500/50"></div>

            <div>
                <SignInForm />

                <span className="flex gap-2 text-sm">
                    <span className="text-zinc-400 dark:text-zinc-500">Ещё нет аккаунта на платформе?</span>
                    <Link className="hover:text-inherit" to="/sign-up">Создать</Link>
                </span>
            </div>
        </div>
    )
}