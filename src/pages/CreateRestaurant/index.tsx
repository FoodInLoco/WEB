import { Box } from "@mui/system";
import { CreateRestaurantForm } from "../../components/CreateRestaurantForm";

export function CreateRestaurantPage() {
  return (
    <Box component="main" sx={{ p: 10, flexGrow: 1, backgroundColor: "#fff", margin: 10 }}>
      <CreateRestaurantForm />
    </Box>
  )
}