import { createContext, useMemo, useState } from "react";

export const OrderContext = createContext({});

export const OrderContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(1);
  const [orderAmound, setOrderAmound] = useState(0);
  const [amound, setAmound] = useState(0);

  useMemo(() => {
    {
      cart,
        setCart,
        orderId,
        setOrderId,
        orderAmound,
        setOrderAmound,
        amound,
        setAmound;
    }
  }, [cart, orderId, orderAmound, amound]);

  return (
    <OrderContext.Provider
      value={{
        cart,
        setCart,
        orderId,
        setOrderId,
        orderAmound,
        setOrderAmound,
        amound,
        setAmound,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
