import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

export const OrderContext = createContext({});

let OrderSender = null;
let OrderReceiver = null;

export const OrderContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(1);
  const [orderAmound, setOrderAmound] = useState(0);
  const [amound, setAmound] = useState(0);
  const [id, setId] = useState(1);
  const [finishedOrder, setFinishedOrder] = useState([]);

  const save = useCallback((data) => {
    window.localStorage.setItem("cart", JSON.stringify(data));
  }, []);

  const restore = useCallback(() => {
    const data = window.localStorage.getItem("cart");

    if (!data) {
      return [];
    }

    return JSON.parse(data);
  }, []);

  // Restore from localStorage
  useEffect(() => {
    const data = restore();

    if (data) {
      setFinishedOrder(data);
    }
  }, [restore, setFinishedOrder]);

  // Adding new order to the List
  const addOrder = useCallback(
    (order, totalPrice) => {
      setId((old) => old + 1);
      const newOrder = [
        ...finishedOrder,
        {
          id: id,
          order: order,
          status: "Primljena porudžbina",
          totalPrice: totalPrice,
        },
      ];
      console.log(newOrder);
      setFinishedOrder(newOrder);
      save(newOrder);
      OrderSender.postMessage(newOrder);
    },
    [finishedOrder, setFinishedOrder, save, id]
  );

  const changeStatus = useCallback(
    (id) => {
      const orders = restore();
      const newOrder = orders.map((order) => {
        if (id === order.id) {
          if (order.status === "Priprema se") {
            return { ...order, status: "Spremno" };
          }
          if (order.status === "Primljena porudžbina") {
            return { ...order, status: "Priprema se" };
          }
        }
        return order;
      });
      console.log(newOrder);
      setFinishedOrder(newOrder);
      save(newOrder);
      OrderSender.postMessage(newOrder);
    },
    [setFinishedOrder, save, restore]
  );

  useEffect(() => {
    OrderSender = new BroadcastChannel("order");
    OrderReceiver = new BroadcastChannel("order");

    OrderReceiver.onmessage = (evt) => {
      setFinishedOrder(evt.data);
    };

    // Unmounted, cleanup.
    return () => {
      if (OrderSender) {
        OrderSender.close();
      }

      if (OrderReceiver) {
        OrderReceiver.close();
      }
    };
  }, [changeStatus, save]);

  useMemo(() => {
    ({
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
      addOrder,
      changeStatus,
    });
  }, [
    cart,
    orderId,
    orderAmound,
    amound,
    finishedOrder,
    addOrder,
    changeStatus,
  ]);

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
        addOrder,
        changeStatus,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
