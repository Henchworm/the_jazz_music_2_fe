import { BASE_URL, GIGS_PARAM, BLARG_PARAM } from "./constants";

const checkErrors = (response) => {
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return response.json();
}

const getData = async (param) => {
  const response = await fetch(`${BASE_URL}${param}`);
  return checkErrors(response);
}

export const getGigs = () => getData(GIGS_PARAM);

export const getBlargPosts = () => getData(BLARG_PARAM);