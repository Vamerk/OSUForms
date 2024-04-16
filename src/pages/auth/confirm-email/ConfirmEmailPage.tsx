import api from "../../../api";
import { useEffect } from "react";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { useNavigate, useLoaderData } from "react-router-dom";

export async function loader({ request }: any) {
    const url = new URL(request.url);
    const token = url.searchParams.get("token");
    return { token };
}

export default function ConfirmEmailPage() {
    const navigate = useNavigate();
    const { token } = useLoaderData();

    useEffect(() => {
        (async () => {
            try {
                const response = await api.post("auth/confirm-email", { token });

                const { accessToken, refreshToken }: { accessToken: string, refreshToken: string } = response.data;

                localStorage.set("accessToken", accessToken);
                localStorage.set("refreshToken", refreshToken);

                navigate("/dashboard")
            } catch {
                navigate("/sign-in")
            }
        })()
    }, [])

    return (
        <div className="flex flex-col gap-8">
            <div className="flex gap-4 justify-center items-center">

                <HiOutlineCog6Tooth className='text-8xl animate-spin' />

                <div>
                    <div className="text-2xl mb-2">Профиль проверяется</div>
                    <div>Скоро вы будете перенаправлены в личный кабинет</div>
                </div>
            </div>
        </div>
    )
}