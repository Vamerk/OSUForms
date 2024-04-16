    import api from "../../../api";
import { Button, Form, Input } from 'antd';
import { redirect } from "react-router-dom";

export default function SignUpForm() {
    // post - 'http://localhost/api/auth/users/', потом закидываем юзернэйм и пассворд в 'http://localhost/api/auth/jwt/create/' и берем access, закидываем в 'http://localhost/api/auth/jwt/verify/' 


    const onFinish = async (data: any) => {
        const response_auth = await api.post("auth/users/", { ...data })

        const response_jwt_create = await api.post("auth/jwt/create/", {... response_auth.data})// response_auth["password"]]})

        const { accessToken, refreshToken } = response_jwt_create.data;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        redirect("/dashboard");
    };

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
                name="username"
            >
                <Input placeholder='Username' />
            </Form.Item>

            <Form.Item<string>
                wrapperCol={{ offset: 0 }}
                name="password"
            >
                <Input placeholder='Пароль' />
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