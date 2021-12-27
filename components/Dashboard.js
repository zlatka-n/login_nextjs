import AuthContext from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

function Dashboard() {
  const [nasa, setNasa] = useState("");

  const DEMO_KEY = "qlHFiRBlCeyV6ci8VVRXj734r1OBR9HFTbjcC4ns";
  const baseUrl = `https://api.nasa.gov/planetary/apod?api_key=${DEMO_KEY}`;

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setNasa(response.data);
    });

    return function cleanup() {
      setNasa("");
    };
  }, []);

  const { user, logout } = useContext(AuthContext);

  const onLogOutClick = () => {
    logout();
  };

  const myLoader = ({ src, width }) => {
    return `${src}?w=${width}`;
  };

  return (
    <div className="w-full max-h-screen font-mono">
      <header className="w-full bg-gray-200 flex flex-row-reverse px-5 md:px-10">
        <button
          onClick={onLogOutClick}
          className="bg-green-400 hover:bg-green-500 px-5 py-2 my-5"
        >
          Log Out
        </button>
      </header>
      <main className="w-full flex flex-col md:px-10">
        <div className="flex flex-col my-10 px-5 text-lg md:text-xl font-semibold">
          <h1 className="flex justify-center pb-2">
            Astronomy picture of the day
          </h1>
          <h2 className="flex justify-center ">{nasa.title}</h2>
        </div>
        <div className="flex justify-center">
          <Image
            loader={myLoader}
            src={`${nasa.url}`}
            alt="Picture of the author"
            width={1000}
            height={500}
            priority="true"
          />
        </div>
        <p className="my-10 px-5 leading-normal">{nasa.explanation}</p>
      </main>
    </div>
  );
}

export default Dashboard;
