import fetch from "node-fetch";

export const getUrl = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }