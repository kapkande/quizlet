export function setLocalStorage(
  response: string,
  nameStorage: string,
  request?: string,
): void {
  let previousValue = localStorage.getItem(nameStorage);
  const data = {
    user: request,
    bot: response,
  };

  if (previousValue) {
    const existingData = JSON.parse(previousValue);
    existingData.push(data);
    localStorage.setItem(nameStorage, JSON.stringify(existingData));
  } else {
    localStorage.setItem(nameStorage, JSON.stringify([data]));
  }
}
