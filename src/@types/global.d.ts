export { };

declare global {

  interface IRestaurantProps {
    id: number;
    companyName: string;
    tradingName: string;
    email: string;
    ddd: string;
    phoneNumber: string;
    state: string;
    city: string;
    zipCode: string;
    street: string;
    number: number;
    complement: string;
    auth?: null;
  }


}
