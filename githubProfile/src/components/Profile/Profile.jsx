import React from "react";
import useStore from "../../store/use-store";
import CardRepo from "../Card/CardRepo";
import { useState } from "react";
export default function Profile() {
  const data = useStore((set) => set.data);
  const repo = useStore((set) => set.repo);
  const [mostrarTodos, setMostrarTodos] = useState(true);

  console.log(repo, "repooo");
  console.log(repo);
  const handleClick = () => {
    setMostrarTodos(!mostrarTodos);
  };
  return (
    <div className="bg-gray-800 md:w-full ">
      <header className="w-full flex flex-col justify-center items-center">
        <div className="flex w-2/3 justify-center items-center absolute mt-16 flex-col md:left-16 md:justify-center md:items-start">
          <img
            className="w-2/5  bg-gray-800 p-1 rounded-xl md:w-1/5 md:p-3"
            src={data.avatar_url}
            alt={data.login}
          />
          <div className="text-start hidden   md:flex flex-col md:gap-3 items-start md:w-1/4 ">
            <span className="text-white text-base font-medium ">
              {data.login}{" "}
            </span>
            <span className="text-gray-400 text-base font-medium   ">
              {data.bio}
            </span>
          </div>
        </div>
        <div className="hidden md:w-full md:flex mt-2 justify-center gap-16 pl-36 items-start ">
          <div className=" bg-black  w-1/5  p-4 flex justify-center gap-5 rounded-lg ">
            <span className="text-gray-500  font-semibold pr-4 border-r border-r-gray-500">
              Followers
            </span>
            <h2 className="text-white  font-semibold  ">{data.followers}</h2>
          </div>
          <div className="bg-black  w-1/5 p-4 flex justify-center gap-5 rounded-lg">
            <span className="text-gray-500  font-semibold pr-4 border-r border-r-gray-500">
              Following
            </span>
            <h2 className="text-white  font-semibold  ">{data.following}</h2>
          </div>
          <div className="bg-black  w-1/4  p-4 flex justify-center gap-5 rounded-lg">
            <span className="text-gray-500  font-semibold pr-4 border-r border-r-gray-500">
              Location
            </span>
            <h2 className="text-white  font-semibold  ">{data.location}</h2>
          </div>
        </div>
      </header>

      <section className="mt-20 flex w-full flex-col gap-8 items-center justify-center md:hidden ">
        <div className="text-center ">
          <span className="text-white text-base font-medium ">
            {data.login}{" "}
          </span>
          <p className="text-gray-400 text-base font-medium p-3 text-center">
            {data.bio}
          </p>
        </div>
        <div className="bg-black  w-3/4 p-3 flex justify-center gap-5 rounded-lg ">
          <span className="text-gray-500  font-semibold pr-4 border-r border-r-gray-500">
            Followers
          </span>
          <h2 className="text-white  font-semibold  ">{data.followers}</h2>
        </div>
        <div className="bg-black  w-3/4 p-3 flex justify-center gap-5 rounded-lg">
          <span className="text-gray-500  font-semibold pr-4 border-r border-r-gray-500">
            Following
          </span>
          <h2 className="text-white  font-semibold  ">{data.following}</h2>
        </div>
        <div className="bg-black  w-3/4 p-3 flex justify-center gap-5 rounded-lg">
          <span className="text-gray-500  font-semibold pr-4 border-r border-r-gray-500">
            Location
          </span>
          <h2 className="text-white  font-semibold  ">{data.location}</h2>
        </div>
      </section>
      <section className="mt-6 flex flex-col justify-center items-center md:mt-44">
        <h2 className="text-white  font-semibold mb-4 ">Recent Repositories</h2>
        <div className="p-3 flex flex-col gap-3  justify-center items-center">
          {mostrarTodos
            ? repo &&
              repo.slice(0, 4).map((r, i) => {
                return <CardRepo key={i} repo={r}></CardRepo>;
              })
            : repo &&
              repo.map((r, i) => {
                return <CardRepo key={i} repo={r}></CardRepo>;
              })}
        </div>
        {mostrarTodos ? (
          <button onClick={handleClick} className="mb-3">
            <span className="text-gray-400 text-lg">View all repositories</span>
          </button>
        ) : (
          <button onClick={handleClick} className="mb-3">
            <span className="text-gray-400 text-lg">
              View recent Repositories
            </span>
          </button>
        )}
      </section>
    </div>
  );
}
