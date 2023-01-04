import axios from "axios";
import City from "./Components/City";
import { useEffect, useState } from "react";

function App() {
  const key = "b0a9ac771080fc609ab43f26dc5cb9a9";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getAPI() {
      if (search) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric `
          );
          setCity(response.data);
        } catch (error) {
          console.log(error.name);
        }
      }
    }
    getAPI();
  }, [search]);
  return (
    <div className="App">
      <div className="flex justify-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="placeholder:italic border-solid border-2 border-gray-500 placeholder:text-slate-400 block bg-gray-100 w-250 border border-slate-300 rounded-md py-2 pl-3 pr-5 shadow-sm focus:outline-none mt-[200px] focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
        />
      </div>
      <div className="flex justify-center">
      { city ? <City city={city} /> : null }
      </div>
    </div>
  );
}

export default App;
