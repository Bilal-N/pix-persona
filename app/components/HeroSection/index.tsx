import GridContainer from "../../components/layout/GridContainer";
import { Grid, Cell } from "@faceless-ui/css-grid";
import AnimatedHeroText from "../animations/AnimatedHeroText";
import { hero, heading, description } from "./styles";

const HeroSection = () => {
  return (
    <section>
      <div className={hero}>
        <GridContainer>
          <Grid>
            <Cell cols={12}>
              <h1 className={heading}>
                <span>
                  <AnimatedHeroText />
                </span>
                <span>Experience</span>
                <span>Agency</span>
              </h1>
              <p className={description}>
                Building an MVP or looking to scale rapidly? You’ve come to the
                right place.
              </p>
            </Cell>
          </Grid>
        </GridContainer>
      </div>
    </section>
  );
};

export default HeroSection;
