/* eslint-disable react/prop-types */
import React, {
  createContext, useContext, useEffect, //useState,
} from 'react';

const TaxiContext = createContext();

const TaxiContextProvider = ({ children }) => {
  // const [, ] = useState([]);
  
  useEffect(() => {
    
  }, []);

  

  return (
    <TaxiContext.Provider value={{      
    }}
    >
      {children}
    </TaxiContext.Provider>

  );
};

export default TaxiContextProvider;

const useTaxiContext = () => useContext(TaxiContext);

export {
  useTaxiContext,
};
