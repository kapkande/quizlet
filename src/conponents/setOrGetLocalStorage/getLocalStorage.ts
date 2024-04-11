import { setLocalStorage } from "./setLocalStorage";

export function getLocalStorage(nameStorage: string):string[] {
    if (!localStorage.getItem(nameStorage)) {
        setLocalStorage('hello', nameStorage);
    }
   return  JSON.parse(localStorage.getItem(nameStorage) as string);
}
