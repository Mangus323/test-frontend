import React, {useEffect} from "react";
import OrdersShowStore from "./store";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import styles from "./styles.m.styl";

type ShowParams = {
  id: string;
};

const OrdersShow = observer(
  (): JSX.Element => {
    const [state] = React.useState(new OrdersShowStore());

    const param: ShowParams = useParams()
    state.id = param.id

    useEffect(() => {
        if (state.order !== null || state.loading) return; // если он НЕ загружается и еще нет
        state.loadOrder();
    })



    return (
      <div className={styles.screenWrapper}>
        <div className={styles.screen}>
          <div className={styles.items}>{param.id}</div>
        </div>
      </div>
    );
  }
);

export default OrdersShow;
