import { ExchangeType } from "@/types";

export const generateRandomString = (length: number): string =>
  Math.random()
    .toString(36)
    .substring(2, length + 2);


export function orderFunction(order: "asc" | "desc") {
  return function(a: ExchangeType, b: ExchangeType): number {
    const aHasUpdate = a.hasOwnProperty("last_update");
    const bHasUpdate = b.hasOwnProperty("last_update");

    if (!aHasUpdate && !bHasUpdate) {
      return 0;
    } else if (!aHasUpdate) {
      return order === "asc" ? -1 : 1; // Undefined goes first in "asc" order
    } else if (!bHasUpdate) {
      return order === "asc" ? 1 : -1; // Undefined goes first in "asc" order
    } else if (order === "asc") {
      if (!isDate(a.last_update) && !isDate(b.last_update)) {
        return compareStrings(a.last_update, b.last_update); // Compare strings, accounting for undefined values
      } else if (!isDate(a.last_update)) {
        return 1; // Non-date strings go after dates in "asc" order
      } else if (!isDate(b.last_update)) {
        return -1; // Non-date strings go after dates in "asc" order
      } else {
        const aDate = getDateValue(a.last_update);
        const bDate = getDateValue(b.last_update);

        return aDate - bDate; // Compare dates
      }
    } else {
      if (!isDate(a.last_update) && !isDate(b.last_update)) {
        return compareStrings(b.last_update, a.last_update); // Compare strings, accounting for undefined values
      } else if (!isDate(a.last_update)) {
        return -1; // Non-date strings go before dates in "desc" order
      } else if (!isDate(b.last_update)) {
        return 1; // Non-date strings go before dates in "desc" order
      } else {
        const aDate = getDateValue(a.last_update);
        const bDate = getDateValue(b.last_update);

        return bDate - aDate; // Compare dates
      }
    }
  };
}

function isDate(value: string | undefined): boolean {
  return value !== undefined && !isNaN(Date.parse(value));
}

function getDateValue(value: string | undefined): number {
  return value !== undefined ? new Date(value).getTime() : 0;
}

function compareStrings(a: string | undefined, b: string | undefined): number {
  if (a === undefined && b === undefined) {
    return 0;
  } else if (a === undefined) {
    return -1;
  } else if (b === undefined) {
    return 1;
  }

  return a.localeCompare(b);
}