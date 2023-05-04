import { bgRed } from "chalk";


export function printError(error: any) {
   console.log(bgRed(' Error '), error)
}