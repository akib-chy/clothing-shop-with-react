import { useEffect, useState } from "react";

const useClints = () => {
  const [clints, setClints] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setClints(data));
  }, []);
  return [clints, setClints];
};
export default useClints;
