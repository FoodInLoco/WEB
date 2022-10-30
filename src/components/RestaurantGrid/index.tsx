import { RestaurandCard } from "../RestaurantCard"

type GridProps = {
  restaurants: Array<IRestaurantProps> | undefined,
  isLoading: boolean

}
export function RestaurantGrid({ restaurants, isLoading }: GridProps) {
  return <>
    {(!restaurants ? Array.from(new Array(10)) : restaurants).map((restaurant, index) => <RestaurandCard restaurant={restaurant} key={index} isLoading={isLoading} />)}
  </>
}