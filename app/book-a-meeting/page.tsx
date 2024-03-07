import GridContainer from "../components/layout/GridContainer";
import { Grid, Cell } from "@faceless-ui/css-grid";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/HeroSection";
import { styles } from "./styles";

export default function BookAMeeting() {
  return (
    <>
      <Header />
      <section>
        <div className={styles.bookMeeting}>
          <GridContainer>
            <Grid>
              <Cell cols={12}>
                <h1 className={styles.heading}>Book a Meeting</h1>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/zeepixel/meeting"
                  style={{ minWidth: "320px", height: "700px" }}
                ></div>
                <script
                  type="text/javascript"
                  src="https://assets.calendly.com/assets/external/widget.js"
                  async
                ></script>
              </Cell>
            </Grid>
          </GridContainer>
        </div>
      </section>
      <Footer />
    </>
  );
}
