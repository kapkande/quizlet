import axios from "axios";
import { config } from "../config";

export async function postGpt(value: string) {
  const gTocen = document.cookie
    .split(";")
    .find((cookie) => cookie.includes("gTocen"))
    ?.split("=")[1];
  const tocen = document.cookie
    .split(";")
    .find((cookie) => cookie.includes("tocen"))
    ?.split("=")[1];
    // console.log(gTocen);

  const link: string = ` ${config.linkInBack}/gpt/gpt`;
  await axios
    .post(
      link,
      {},
      {
        headers: {
          tocen: tocen,
          gTocen: gTocen,
          request: value,
        },
      }
    )
    .then((res) => {
      console.log(res);
      return res
      // setData(data);
    })
    .catch((error) => {
      const e: string = String(error);
      console.error(e);
    });
}
