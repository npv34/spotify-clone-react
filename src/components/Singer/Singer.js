import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import * as React from "react";

export function Singer() {
    return (
        <>
            <Grid item xs={3} md={3}>
                <Card sx={{maxWidth: 250}}>
                    <CardActionArea>
                        <CardContent>
                            <CardMedia
                                sx={{height: 200, borderRadius: '50%', mb: 4}}
                                image="/images/taylor-swift.jpeg"
                                title="green iguana"
                            />
                            <Typography gutterBottom variant="h6" component="div">
                                Taylor swift
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Nghệ sĩ
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    )
}