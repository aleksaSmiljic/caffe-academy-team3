import { createContext, useMemo, useState } from "react";

export const OrderContext = createContext({});

export const OrderContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(1);
  const [orderAmound, setOrderAmound] = useState(0);

  useMemo(() => {
    {
      cart, setCart, orderId, setOrderId, orderAmound, setOrderAmound;
    }
  }, [cart, orderId, orderAmound]);

  return (
    <OrderContext.Provider
      value={{
        cart,
        setCart,
        orderId,
        setOrderId,
        orderAmound,
        setOrderAmound,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
