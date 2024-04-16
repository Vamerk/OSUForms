import api from "../../../api";
import { Button, Form, Input, Select } from 'antd';
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PortalModel } from "../../../lib/models/portal.model";

export default function SignInForm() {
    const navigate = useNavigate();

    const onFinish = async ({
        email,
        password,
        username,
    }: {
        email: string
        password: string
        username: string
    }) => {
        const response = await api.post("auth/users/", { username, password })

        const { accessToken, refreshToken } = response.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        navigate("/dashboard");
    };

    const [portals, setPortal] = useState<PortalModel[]>([]);

    useEffect(() => {
        (async () => {
            setPortal((await api.get("/portal")).data);
        })()
    }, [])

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            onFinish={onFinish}
            autoComplete="off"
        >

            <Form.Item<string>
                wrapperCol={{ offset: 0 }}
                name="email"
            >
                <Input placeholder='Почта' />
            </Form.Item>

            <Form.Item<string>
                wrapperCol={{ offset: 0 }}
                name="password"
            >
                <Input.Password placeholder='Пароль' />
            </Form.Item>

            <Form.Item
                wrapperCol={{ offset: 0 }}>
                <Button type="primary" htmlType="submit" rootClassName='w-full bg-[#1677ff]'>
                    Войти
                </Button>
            </Form.Item>
        </Form>
    )
}