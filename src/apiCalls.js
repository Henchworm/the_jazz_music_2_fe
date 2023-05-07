import { BASE_URL, GIGS_PARAM } from "./constants";

const checkErrors = (response) => {
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return response.json();
}

export const getGigs = () => {
  return fetch(`${BASE_URL}${GIGS_PARAM}`)
    .then(response => checkErrors(response))
}