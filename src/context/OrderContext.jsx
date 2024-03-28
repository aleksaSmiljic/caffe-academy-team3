import { createContext, useMemo, useState } from "react";

export const OrderContext = createContext({});

export const OrderContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(1);
  const [orderAmound, setOrderAmound] = useState(0);
  const [amound, setAmound] = useState(0);
  const [finishedOrder, setFinishedOrder] = useState([]);
  const [id, setId] = useState(0);

  useMemo(() => {
    {
      cart,
        setCart,
        orderId,
        setOrderId,
        orderAmound,
        setOrderAmound,
        amound,
        setAmound,
        finishedOrder,
        setFinishedOrder,
        id,
        setId;
    }
  }, [cart, orderId, orderAmound, amound, finishedOrder, id]);

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
        setFinishedOrder,
        finishedOrder,
        id,
        setId,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
