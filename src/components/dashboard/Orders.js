import classes from "./Orders.module.css";

const Orders = () => {
  const orderListData = [
    {
      orderId: 2418,
      orderDate: "October 27, 2023",
      orderStatus: "Completed",
      orderTotal: 100.65,
      orderItemsCount: 3,
    },
    {
      orderId: 2419,
      orderDate: "November 2, 2023",
      orderStatus: "Canceled",
      orderTotal: 20.65,
      orderItemsCount: 1,
    },
    {
      orderId: 2420,
      orderDate: "November 3, 2023",
      orderStatus: "In Transit",
      orderTotal: 30.65,
      orderItemsCount: 2,
    },
    {
      orderId: 2421,
      orderDate: "November 8, 2023",
      orderStatus: "On hold",
      orderTotal: 120.65,
      orderItemsCount: 5,
    },
  ];

  return (
    <section className={classes.tableContainer}>
      <div className={classes.ordersTable}>
        <div className={`${classes.titles} ${classes.paddingLeft}`}>ORDER</div>
        <div className={classes.titles}>DATE</div>
        <div className={classes.titles}>STATUS</div>
        <div className={classes.titles}>TOTAL</div>
        <div className={classes.titles}>ACTIONS</div>
      </div>
      {orderListData.map((item) => {
        return (
          <div className={classes.ordersList} key={item.orderId}>
            <div
              className={`${classes.info} ${classes.paddingLeft} ${classes.underline}`}
            >
              #{item.orderId}
            </div>
            <div className={classes.info}>{item.orderDate} </div>
            <div className={classes.info}>{item.orderStatus}</div>
            <div className={classes.info}>
              {item.orderTotal}€ for {item.orderItemsCount}{" "}
              {item.orderItemsCount === 1 ? "item" : "items"}{" "}
            </div>
            <div className={classes.info}>
              <button type="submit" className={`${classes.submit}`}>
                VIEW
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default Orders;
