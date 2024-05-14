import React from 'react'
import "./EntradaInput.css"
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";
import useStore from '../../store/use-store';
export default function EntradaInput() {
    const user = useStore((state) => state.user)
    const setUser = useStore((state) => state.setUser)
    const handleChange = (event) => {
        console.log("Value changed:", event.target.value);
        setUser(event.target.value);
    };

    return (
        <section className='relative'>
            <img className='h-36 md:h-full' src="./hero-image-github-profile.png" alt="" />
            <TextField
                id="outlined-basic"
                placeholder='Username'
                type='text'
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
                    color: 'white',
                    fontWeight: "bold",
                    borderRadius: "10px",
                    '@media screen and (max-width: 768px)': {
                        width: '40%',
                        top: "50%",
                    },
                }}
                variant="outlined"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon sx={{ fontSize: "18px" }} /> {/* Icono al principio del TextField */}
                        </InputAdornment>
                    ),
                }}
            />

        </section>
    )
}
