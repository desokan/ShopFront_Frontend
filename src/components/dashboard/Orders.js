import { useTranslation } from "react-i18next";
import classes from "./Orders.module.css";

const Orders = () => {
  const { t } = useTranslation();
  const orderListData = [
    {
      orderId: 2418,
      orderDate: `${t("orders.date.october")} 27, 2023`,
      orderStatus: `${t("orders.status.completed")}`,
      orderTotal: 100.65,
      orderItemsCount: 3,
    },
    {
      orderId: 2419,
      orderDate: `${t("orders.date.november")} 2, 2023`,
      orderStatus: `${t("orders.status.canceled")}`,
      orderTotal: 20.65,
      orderItemsCount: 1,
    },
    {
      orderId: 2420,
      orderDate: `${t("orders.date.november")} 3, 2023`,
      orderStatus: `${t("orders.status.transit")}`,
      orderTotal: 30.65,
      orderItemsCount: 2,
    },
    {
      orderId: 2421,
      orderDate: `${t("orders.date.november")} 8, 2023`,
      orderStatus: `${t("orders.status.hold")}`,
      orderTotal: 120.65,
      orderItemsCount: 5,
    },
  ];

  return (
    <section className={classes.tableContainer}>
      <div className={classes.ordersTable}>
        <div className={`${classes.titles} ${classes.paddingLeft}`}>
          {t("orders.table.order")}
        </div>
        <div className={`${classes.titles} ${classes.visibilityNone}`}>{t("orders.table.date")}</div>
        <div className={`${classes.titles} ${classes.visibilityNone}`}>{t("orders.table.status")}</div>
        <div className={`${classes.titles} ${classes.visibilityNone}`}>{t("orders.table.total")}</div>
        <div className={classes.titles}>{t("orders.table.actions")}</div>
      </div>
      {orderListData.map((item) => {
        return (
          <div className={classes.ordersList} key={item.orderId}>
            <div
              className={`${classes.info} ${classes.paddingLeft} ${classes.underline}`}
            >
              #{item.orderId}
            </div>
            <div className={`${classes.titles} ${classes.visibilityNone}`}>{item.orderDate} </div>
            <div className={`${classes.titles} ${classes.visibilityNone}`}>{item.orderStatus}</div>
            <div className={`${classes.titles} ${classes.visibilityNone}`}>
              {item.orderTotal}€ {t("orders.total.for")} {item.orderItemsCount}{" "}
              {item.orderItemsCount === 1
                ? t("orders.total.item")
                : t("orders.total.items")}{" "}
            </div>
            <div className={classes.info}>
              <button type="submit" className={`${classes.submit}`}>
                {t("orders.actions.view")}
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};
export default Orders;
