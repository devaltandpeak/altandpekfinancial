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

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
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
      <ListItem className={classes.listItem}>
        <CustomDropdown
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
        />
      </ListItem>
    </List>
  );
}
