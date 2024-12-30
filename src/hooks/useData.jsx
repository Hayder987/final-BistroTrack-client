import axios from "axios";
import { useEffect, useState } from "react";


const useData = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_ServerUrl}/menuItem`).then((res) => {
      setMenu(res.data);
      setLoading(false)
    });
  }, []);
    return  [menu, loading]
};

export default useData;