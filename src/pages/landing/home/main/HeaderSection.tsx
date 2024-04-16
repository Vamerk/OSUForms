import React from "react";
import { Link } from "react-router-dom";


export const HeaderSection = () => {
  return (
    <>
      <div className="bg-[url(/landing/bg1.png)] h-screen bg-no-repeat bg-cover">
        <div className="container mx-auto max-w-[700px] px-5 py-60 flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-10">
          
            <h1 className=" text-6xl text-black md:text-8xl">
              OSU Forms
            </h1>
            <p className="text-xl text-black">
              Создайте опрос для <b>каждого</b> под <b>любую</b> задачу
            </p>
          </div>
          <div className="gap-y-10 text-2xl">
            <Link to="/sign-in">
              <button className=" rounded-lg bg-blue-500 px-2 py-1 duration-500 hover:bg-blue-600 text-white h-16 w-80 m-4">
                  {" "}
                  Войти
              </button>
            </Link>
            <Link to="/sign-up">
              <button className="rounded-lg bg-blue-500 px-2 py-1 duration-500 hover:bg-blue-600 text-white h-16 w-80 m-4">
                  {" "}
                  Зарегистрироваться
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
