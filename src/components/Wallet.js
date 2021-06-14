import { useState, useEffect } from "react";
import database from "../Firebase";

const Wallet = () => {
  const [token, setToken] = useState([]);

  useEffect(() => {
    const unsubscribe = database.collection("tokens").onSnapshot((snapshot) => {
      setToken(snapshot.docs.map((doc) => doc.data()));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1 style={{ color: "white" }}>Wallet</h1>
      {token.map((token, index) => (
        <h3 key={index} style={{ color: "white" }}>
          {token.name}
        </h3>
      ))}
    </div>
  );
};

export default Wallet;
