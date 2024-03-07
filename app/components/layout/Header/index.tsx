import { Grid, Cell } from "@faceless-ui/css-grid";
import { header } from "./styles";
import { LogoWithText } from "../../graphics/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className={header}>
        <Grid>
          <Cell cols={12}>
            <Link href="/">
              <LogoWithText />
            </Link>
          </Cell>
        </Grid>
      </div>
    </header>
  );
};

export default Header;
