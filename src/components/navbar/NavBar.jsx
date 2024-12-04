import { pulse, navbarStyles, navListStyles, navItemStyles, navLinkStyles, navIconStyles, navLabelStyles, statusDotStyles, navTooltipStyles,  } from "./NavBarStyle.js";

const NavBar = () => {
  return (
    <div css={navbarStyles}>
      <ul css={navListStyles}>
        <li css={navItemStyles}>
          <a href="#" css={navLinkStyles}>
            <span css={navIconStyles}>🏠</span>
            <span css={navLabelStyles}>Home</span>
            <span css={statusDotStyles}></span>
            <span css={navTooltipStyles}>Home</span>
          </a>
        </li>
        <li css={navItemStyles}>
          <a href="#" css={navLinkStyles}>
            <span css={navIconStyles}>📄</span>
            <span css={navLabelStyles}>Documents</span>
            <span css={statusDotStyles}></span>
            <span css={navTooltipStyles}>Documents</span>
          </a>
        </li>
        <li css={navItemStyles}>
          <a href="#" css={navLinkStyles}>
            <span css={navIconStyles}>📞</span>
            <span css={navLabelStyles}>Contact</span>
            <span css={statusDotStyles}></span>
            <span css={navTooltipStyles}>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;