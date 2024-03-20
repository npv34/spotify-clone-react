import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Singer} from "../../components/Singer/Singer";
import * as React from "react";
import {useEffect, useState} from "react";
import SpotifyService from "../../service/spotify.service";

function Home() {
    const [singers, setSinger] = useState([]);

    useEffect(() => {
        SpotifyService.getTopArtist(10).then((res) => {
            console.log(res)
            setSinger(res.data.artists.items);
        }).catch((err) => {
            console.log(err);
        })
        console.log(singers);
    }, []);
    return (
        <>
            <Box container>
                <Grid item xs={12} md={12} lg={12} sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '10px'
                }}>
                    <Typography sx={{fontSize: 'h5.fontSize'}}
                    >Nghệ sĩ phổ biến</Typography>
                    <Typography>Hiển thị tất cả</Typography>
                </Grid>
            </Box>
            <Grid container sx={{marginTop: '3px'}} spacing={2} xs={12} md={12} lg={12}>
                {singers.length > 0 && singers.map(item => (
                    <>
                    <Singer item={item}/>
                    </>
                    
                ))}

            </Grid>
        </>
    )
}

export default Home;