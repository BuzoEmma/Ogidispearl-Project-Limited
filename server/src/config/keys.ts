import dotenv from "dotenv";
dotenv.config();
import { devKeys } from "./dev";
import { prodkeys } from "./prod";

export interface Keys {
    cookieSecret: string;
}

export const keys = (): Keys => {
    if (process.env.NODE_ENV) {
        return prodkeys;
    } else {
        return devKeys;
    }
};