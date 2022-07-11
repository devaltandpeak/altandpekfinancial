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
        {/* <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>All components</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
          ]}
        /> */}
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
        <Link href="">
          <Button
            href="http://altandpeakfinancial.com/"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Debt Reduction
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/products/creditrepair" as="/products/creditrepair">
          <Button
            color="transparent"
            className={classes.navLink}
          >
            Credit Repair
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="">
          <Button
            href="http://altandpeakfinancial.com/"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Mortgage
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="">
          <Button
            href="http://altandpeakfinancial.com/"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Auto Finance
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="">
          <Button
            href="http://altandpeakfinancial.com/"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            About
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="">
          <Button
            href="http://altandpeakfinancial.com/"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Partner with Us!
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="">
          <Button
            href="http://altandpeakfinancial.com/"
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            Contact Us
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}
