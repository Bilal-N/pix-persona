import { Grid, Cell } from "@faceless-ui/css-grid";
import { header } from "./styles";
import { LogoWithText } from "../../graphics/Logo";

const Header = () => {
  return (
    <header>
      <div className={header}>
        <Grid>
          <Cell cols={12}>
            <LogoWithText />
          </Cell>
        </Grid>
      </div>
    </header>
  );
};

export default Header;
