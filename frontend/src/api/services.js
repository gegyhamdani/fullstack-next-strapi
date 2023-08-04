import api from ".";
import endpoint from "./endpoint";

const getAllPeople = async () => {
  try {
    const res = await api.get(endpoint.PEOPLE);
    return res;
  } catch (err) {
    throw Error(err);
  }
};

const getSelectedPerson = async (name) => {
  try {
    const res = await api.get(
      `${endpoint.PEOPLE}?filters[url][$eqi]=${name}&populate=*`
    );
    return res;
  } catch (err) {
    throw Error(err);
  }
};

export { getAllPeople, getSelectedPerson };
