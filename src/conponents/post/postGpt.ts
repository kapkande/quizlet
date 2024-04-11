import axios from "axios";
import { config } from "../config";
interface IPostGpt {
  data: string;
  status: number;
}

export async function postGpt(value: string): Promise<IPostGpt> {
  const encodedValue = encodeURIComponent(value);
  const tocen = document.cookie
    .split(";")
    .find((cookie) => cookie.includes("tocen"))
    ?.split("=")[1];
  const link: string = ` ${config.linkInBack}/gpt/gpt`;
  try {
    const response = await axios.post(
      link,
      {},
      {
        headers: {
          tocen: tocen,
          request: encodedValue,
        },
      }
    );
    // return { data: value, status: 200 };
    return { data: response.data, status: response.status  };
  } catch (error) {
    const errorMessage: string = String(error);
    console.error(errorMessage);
    throw errorMessage;
  }
}
