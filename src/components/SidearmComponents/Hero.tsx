import { Grid, Chip, Typography, Button, Link } from "@mui/material"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/state/types";
export default function Hero() {
  const previewComponents = useSelector((state: RootState) => state.previewComponents)
  return (
    <Grid sm={8} item>
      {
        previewComponents.heroText ?
          <>
            <Chip sx={{ borderRadius: '8px' }} color="secondary" label="Volleyball" />
            <Typography variant="h2">Volleyball Hosts Miami And No. 19 Florida State This Weekend</Typography>
            <Typography variant="body2">10/17/202 | 12:58:00 PM</Typography>
            <Grid pt={3} display={"flex"} alignItems={'center'} columnGap={2}>
              <Button color='primary' variant="outlined" startIcon={<PlayArrowIcon />}>Watch Highlights</Button>
              <Link color="Info" underline="none">Read More</Link>
            </Grid>
          </>
          : null
      }
    </Grid>
  )
}