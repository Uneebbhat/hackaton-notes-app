import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./SignUp.css";

export default function SignUp() {
  return (
    <>
      <section className="sign__up-section">
        <div className="container">
          <div className="left__side">
            <div className="sign__up-img">
              <img src="/img/signup.svg" alt="" />
            </div>
          </div>
          <div className="right__side">
            <div className="wrapper">
              <h1>Welcome to DailyNotes</h1>
              <form action="/" className="form">
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "400px" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField id="filled-basic" label="Name" variant="filled" />
                  <TextField
                    id="filled-basic"
                    label="name@gmail.com"
                    variant="filled"
                  />
                  <TextField
                    id="filled-basic"
                    label="password"
                    variant="filled"
                  />
                  <Stack spacing={2} direction="row">
                    <Button variant="contained">Register</Button>
                  </Stack>
                </Box>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
