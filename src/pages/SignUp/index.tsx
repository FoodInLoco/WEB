import { FormControl, InputLabel, Input, FormHelperText, OutlinedInput, FilledInput } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { CreateRestaurantForm } from "../../components/CreateRestaurantForm";
import SignUpForm from "../../components/SignUpForm";

export function SignUp() {


  return (
    <Box component="main" sx={{ p: 3, flexGrow: 1 }}>
      <CreateRestaurantForm/>
    </Box>
  )
}