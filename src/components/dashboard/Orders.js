import classes from "./Orders.module.css";

const Orders = () => {
  const orderListData = [
    {
      oderId: 2418,
      orderDate: "October 27, 2023",
      orderStatus: "Completed",
      orderTotal: 100.65,
      orderItemsCount: 3,
    },
    {
      oderId: 2419,
      orderDate: "November 2, 2023",
      orderStatus: "Canceled",
      orderTotal: 20.65,
      orderItemsCount: 1,
    },
    {
      oderId: 2420,
      orderDate: "November 3, 2023",
      orderStatus: "In Transit",
      orderTotal: 30.65,
      orderItemsCount: 2,
    },
    {
      oderId: 2421,
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
          <div className={classes.ordersList}>
            <div
              className={`${classes.info} ${classes.paddingLeft} ${classes.underline}`}
            >
              #{item.oderId}
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
