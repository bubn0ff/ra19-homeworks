export const fetchService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`);
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
}

export const fetchServices = async () => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  if (!response.ok) throw new Error(response.statusText);
  return await response.json();
}