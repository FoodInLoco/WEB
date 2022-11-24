import { handleZipCode } from "./formatZipCode";

type handleAddressProps = {
  address: IRestaurantProps
  type: 'short' | 'long'
}
export function handleAddress({ address, type }: handleAddressProps) {
  const { street, number, state, complement, city, zipCode } = address;
  const formatedZipCode = zipCode ? handleZipCode(zipCode) : ""
  if (street) {
    if (type === 'short') {
      return `${street},${number} - ${city}`;
    } else {
      return `${street}, ${number} - ${complement} ${city}, ${state} - ${formatedZipCode}`;
    }
  } else {
    return '';
  }


}