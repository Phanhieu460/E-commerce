import { Grid, TextField, Select, MenuItem } from "@material-ui/core";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const CustomTextField = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        render={({ field }) => <TextField fullWidth label={label} required />}
        control={control}
        name={name}
      />
    </Grid>
  );
};

export default CustomTextField;
