import { Model, Schema, Types, model } from "mongoose";

interface IShippingDetailes {
  name: string;
  cellphone: string;
  location: string;
  address: string;
}

interface IItem {
  name: string;
  id: number;
  price: number;
  quantity: number;
  product: string;
}

export interface IOrder {
  createdAt: Date;
  user: Types.ObjectId;
  price: number;
  shippingCost: number;
  items: IItem[];
  shippingDetails: IShippingDetailes;
  status: string;
  total: number;
}

const OrderSchema = new Schema<IOrder>({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  shippingCost: {
    type: Number,
  },
  items: {
    type: [
      {
        name: {
          type: String,
          required: true,
        },
        id: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        product: {
          type: String,
          required: true,
        },
      },
    ],
    required: true,
  },
  shippingDetails: {
    name: {
      type: String,
      required: true,
    },
    cellphone: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  status: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
});

const Order: Model<IOrder> = model<IOrder>("Order", OrderSchema);

export default Order;
