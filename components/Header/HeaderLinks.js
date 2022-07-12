/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons


// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";
import { Menu, MenuItem } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  
  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="/home">
          <Button
            color="transparent"
            className={classes.navLink}
          >
            Home
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/aboutus">
          <Button
            color="transparent"
            className={classes.navLink}
          >
            About
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/partnerwithus">
          <Button
            color="transparent"
            className={classes.navLink}
          >
            Partner with Us!
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/contactus">
          <Button
            color="transparent"
            className={classes.navLink}
          >
            Contact Us
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem} >
        <Button
          onClick={handleClick}
          onMouseOver={handleClick}
          style={{ fontSize: '16px', backgroundColor: 'transparent', fontWeight: '500', lineHeight: '20px', color: 'white !important', boxShadow: 'none !important' }}
          className={classes.navLink}

        >
          Products
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{ onMouseLeave: handleClose }}
          disableScrollLock={true}
          style={{ padding: 0 }}
        >
          <MenuItem onClick={handleClose} style={{ padding: '0px' }}>
            <Link href="/products/debtreduction">
              <a className={classes.dropdownLink}>Debt Reduction</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} style={{ padding: '0px' }}>
            <Link href="/products/creditrepair">
              <a className={classes.dropdownLink}>Credit Repair</a>
            </Link></MenuItem>
          <MenuItem onClick={handleClose} style={{ padding: '0px' }}>
            <Link href="/products/mortgage">
              <a className={classes.dropdownLink}>Mortgage</a>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} style={{ padding: '0px' }}>
            <Link href="/products/autofinance">
              <a className={classes.dropdownLink}>Auto Finance</a>
            </Link>
          </MenuItem>
        </Menu>
      </ListItem>
      {/* <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Products"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          dropdownList={[
            <Link href="/products/debtreduction">
              <a className={classes.dropdownLink}>Debt Reduction</a>
            </Link>,
            <Link href="/products/creditrepair">
              <a className={classes.dropdownLink}>Credit Repair</a>
            </Link>,
            <Link href="/products/mortgage">
              <a className={classes.dropdownLink}>Mortgage</a>
            </Link>,
            <Link href="/products/autofinance">
              <a className={classes.dropdownLink}>Auto Finance</a>
            </Link>
          ]}
        />*/}
    </List >

  );
}
