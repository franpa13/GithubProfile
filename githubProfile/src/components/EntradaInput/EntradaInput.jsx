import React from "react";
import "./EntradaInput.css";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { findUser } from "../../service/findUser";
import { traerRepos } from "../../service/repositories";
import InputAdornment from "@mui/material/InputAdornment";
import useStore from "../../store/use-store";

export default function EntradaInput() {
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const data = useStore((state) => state.data);

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    findUser(user);
    traerRepos(user);
  };

  return (
    <section className="relative">
      <img
        className="h-26 md:h-full"
        src="./hero-image-github-profile.png"
        alt=""
      />

      <form onSubmit={handleForm}>
        <TextField
          id="outlined-basic"
          placeholder="Username"
          type="text"
          onChange={handleChange}
          value={user}
          size="small"
          sx={{
            width: "30%",
            bgcolor: "white",
            position: "absolute",
            left: "50%",
            top: "30%",
            transform: "translate(-50%, -50%)",
            color: "white",
            fontWeight: "bold",
            borderRadius: "10px",
            "@media screen and (max-width: 768px)": {
              width: "50%",
              top: "40%",
            },
          }}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ fontSize: "18px" }} />
              </InputAdornment>
            ),
            sx: {
              "& .MuiOutlinedInput-input": {
                padding: "6px",
              },
            },
          }}
        />
      </form>
    </section>
  );
}
