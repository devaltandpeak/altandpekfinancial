import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "styles/jss/nextjs-material-kit/pages/profilePage.js";

import CommonForm from "./commonform";

const useStyles = makeStyles(styles);

export default function CreditRepair(props) {
    const classes = useStyles();
    const { ...rest } = props;

    return (
        <div>
            <Header
                brand="Alt and Peak Financial"
                rightLinks={<HeaderLinks />}
                fixed
                color="#177CB0"
                changeColorOnScroll={{
                    height: 50,
                    color: "#177CB0",
                }}
                {...rest}
            />
            <CommonForm />

            <Footer />
        </div>
    );
}
