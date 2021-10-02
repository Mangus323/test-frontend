import { makeAutoObservable } from "mobx";
import { SingleOrder } from "~/screens/Orders/Show/types";
import client from "~/api/gql";
import {ORDER_QUERY} from "~/screens/Orders/Show/queries";

export default class OrdersShowStore {
  order: SingleOrder | null = null;
  id: string | null = null;
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  async loadOrder() {
    this.loading = true;
    return client
      .query(ORDER_QUERY, { "number": this.id })
      .toPromise()
      .then(result => {
        this.loading = false;
        let data = result.data.order
        if(!data) return

        this.order = data
        console.log(data)
      });
  }
}
