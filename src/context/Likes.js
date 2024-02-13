import { useState, useContext, createContext, useEffect } from "react";

const LikesContext = createContext();

const LikesProvider = ({ children }) => {
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    let existingLikes = localStorage.getItem('likes');
    if(existingLikes) setLikes(JSON.parse(existingLikes))
  }, [])

  return (
    <LikesContext.Provider value={[likes, setLikes]}>
      {children}
    </LikesContext.Provider>
  );
};

// custom hook
const useLikes = () => useContext(LikesContext);

export { useLikes, LikesProvider };
