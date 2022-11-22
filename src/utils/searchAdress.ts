import axios from 'axios'
export async function getAdress(zipCode: string) {
  const response = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
  return response.data

}