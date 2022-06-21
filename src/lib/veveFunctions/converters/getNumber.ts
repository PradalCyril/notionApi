import { INumber } from "../../interfaces";

export const getNumber: Function = (number: number | null): INumber => ({
    number,
  });
