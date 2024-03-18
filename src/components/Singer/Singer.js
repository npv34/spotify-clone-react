import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import * as React from "react";
import {useEffect, useState} from "react";

export function Singer({item}) {
    const [artist, setArtist] = useState({});

    useEffect(() => {
        setArtist(item.images[0])
    }, [])
    return (
        <>
            { artist && (
                <Grid item xs={3} md={3}>
                    <Card sx={{maxWidth: 250}}>
                        <CardActionArea>
                            <CardContent>
                                <CardMedia
                                    sx={{height: 200, borderRadius: '50%', mb: 4}}
                                    image={artist.url}
                                    title="green iguana"
                                />
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Nghệ sĩ
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            )}
        </>
    )
}