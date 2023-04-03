import { Box, Container, Typography, useTheme } from "@mui/material";
import SectionContainer from "../../components/SectionContainer";
import FlippedText from "../../components/FlippedText";
import Particles from "../../components/Particles/Particles";

const Home = () => {
    const theme = useTheme();
    return (
      <SectionContainer
        sx={{ position: "relative", overflow: "hidden" }}
        id="sectionAccueil"
      >
        <Particles />
        <Container maxWidth="lg" sx={{ py: 27 }}>
          <Box sx={{ overflow: "hidden" }}>
            <Typography
              align="center"
              variant="h3"
              sx={{
                margin: "0 auto",
                maxWidth: "800px",
                [theme.breakpoints.down("md")]: {
                  fontSize: 38,
                },
              }}
            >
              Coworking space, refuge for{" "}
              <FlippedText
                delay={0.5}
                duration={4}
                words={["creatives", "freelancers", "startups"]}
              />{" "}
              with a breathtaking view of DHA Lahore
            </Typography>
          </Box>
        </Container>
      </SectionContainer>
    );
};

export default Home;
