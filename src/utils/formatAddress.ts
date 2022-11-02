type handleAddressProps = {
  address: IRestaurantProps
  type: 'short' | 'long'
}
export function handleAddress({ address, type }: handleAddressProps) {
  const { street, number, state, complement, city, zipCode } = address;
  if (street) {
    if (type === 'short') {
      return `${street},${number} - ${city}`;
    } else {
      return `${street},${number} - ${complement} ${city}, ${state} -  ${zipCode}`;
    }
  } else {
    return '';
  }


}