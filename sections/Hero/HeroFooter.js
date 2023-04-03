import { Box, Grid, useTheme } from "@mui/material";
import React from "react";
import ItemFooter from "./ItemFooter";

const content = [
  {
    title: "Access 24/7",
    description: "Enjoy 24/7 access by subscribing with us.",
  },
  {
    title: "Community",
    description:
      "The community at home is one of our pillars. Nothing better than a good network to move forward.",
  },
  {
    title: "Comfort",
    description:
      "Our space offers you all the amenities so you can focus only on your goals",
  },
];

const HeroFooter = () => {
    const theme = useTheme();
    return (
        <Box
            sx={{
                width: "80%",
                p: 4,
                marginLeft: "auto",
                marginTop:"-80px",
                borderLeft: `4px solid rgba(0,0,0,.2)`,
                borderTopLeftRadius: "6px",
                borderBottomLeftRadius: "6px",
                backgroundColor: theme.palette.primary.main,
            }}
        >
            <Grid container columns={content.length} spacing={2}>
                {content.map((elem,k) => (
                    <Grid key={k} item md={1} xs={content.length}>
                        <ItemFooter 
                            title={elem.title}
                            description={
                                elem.description
                            }
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HeroFooter;
