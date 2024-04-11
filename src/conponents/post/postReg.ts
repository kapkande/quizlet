import axios, { AxiosError } from "axios";
import { config } from "../config";

interface iReg {
  email: string;
  password: string;
  name: string;
}

export async function postReg(data: iReg) {
  const link: string = `${config.linkInBack}/auth/registration`;

  if (data.name == "") {
    return;
  }
  try {
     await axios
      .post(
        link,
        {},
        {
          headers: {
            name: data.name,
            email: data.email,
            password: data.password,
          },
        }
      )
      .then(() => {
        return data.name;
      });

    // if (respons.data == "Account created successfully") {
    // }
  } catch (e: unknown) {
    const error = e as AxiosError;
    console.error(error.message);
    // return error
  }
}
