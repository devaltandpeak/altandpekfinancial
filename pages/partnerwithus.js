import React, { useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Link from "next/link";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page

import { Formik } from "formik";
import * as Yup from "yup";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import { Card, CardHeader, InputAdornment, TextField } from "@material-ui/core";
import { Email, People } from "@material-ui/icons";
import CardBody from "components/Card/CardBody.js";
import CommentIcon from '@material-ui/icons/Comment';
import MaskedInput from "react-text-mask";

const useStyles = makeStyles(styles);

export default function PartnerWithUs(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <Formik
            initialValues={{
                name: '',
                businessName: '',
                email: '',
                phone: '',
                notes: ''
            }}
            validationSchema={Yup.object().shape({
                name: Yup.string().trim().required('Name is required'),
                businessName: Yup.string().trim().required('Business Name is required'),
                phone: Yup.string()
                    .required("Mobile is required")
                    .matches(
                        /^\D?((?!1)[0-9]\d{2})\D?\D?(\d{3})\D?(\d{4})$/,
                        "Mobile number is not valid"
                    ),
                email: Yup.string()
                    .email('Must be a valid email')
                    .required('Email is required'),
                notes: Yup.string().trim().required('Notes is required')
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log("formik.valuessss", values);
                const cleanphone = values.phone.replace(/[\W]/g, "");
                const data = {
                    name: values.name,
                    email: values.email,
                    phone: cleanphone,
                    notes: values.notes,
                    businessName: values.businessName
                }
                let strLeadData = JSON.stringify(data);
                console.log("data", data);
                let options = {
                    method: "post",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: strLeadData,
                };
                const apiUrl =
                    "https://phplaravel-802492-2747645.cloudwaysapps.com/api/postSandBoxPartnerContact";
                fetch(apiUrl, options)
                    .then((response) => {
                        if (!response.ok) {
                            throw Error(response.statusText);
                        }
                        alert(
                            "Form Successfully submitted. \nOne of our specialist will reach out to you within 24 hours."
                        );
                        window.location.href = "/home";
                        return response;
                    })
                    .catch((error) => {
                        alert(
                            "Sorry, your form could not be submitted, please try again later today."
                        );
                        window.location.href = "/";
                    });
            }}
        >
            {(props) => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                } = props;
                const [debtAmount, setAmount] = useState("");

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
                        <Parallax>
                            <div className={classes.container} >
                                <GridContainer justify="flex-end">
                                    <GridItem xs={12} sm={12} md={4}>
                                        <Card style={{ marginTop: '100px' }}>
                                            <CardHeader title="Partner With Us" style={{ textAlign: 'center', color: '#e91e63', marginBottom: '-35px' }} />
                                            <form className={classes.form} onSubmit={handleSubmit}>
                                                <CardBody style={{ marginBottom: '40px' }}>
                                                    <div>
                                                        <div>
                                                            <TextField
                                                                id="name"
                                                                label="name"
                                                                fullWidth
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <People className={classes.inputIconsColor} />
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                                // error={(formik.values.firstName === '' && submitted) ? true : false}
                                                                value={values.name}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                            {errors.name && (
                                                                <div className={classes.text_danger}>{errors.name}</div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <TextField
                                                                label="Business Name"
                                                                id="businessName"
                                                                fullWidth
                                                                InputProps={{
                                                                    type: "text",
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <People className={classes.inputIconsColor} />
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                                // error={values.lastName === '' ? true : false}
                                                                value={values.businessName}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                            {errors.businessName && (
                                                                <div className={classes.text_danger}>{errors.businessName}</div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <TextField
                                                                label="Email"
                                                                fullWidth
                                                                name="email"
                                                                type="email"
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <Email className={classes.inputIconsColor} />
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                                // error={values.email === '' ? true : false}
                                                                value={values.email}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                            {errors.email && (
                                                                <div className={classes.text_danger}>{errors.email}</div>
                                                            )}
                                                        </div>
                                                        <div style={{ paddingTop: '12px' }}>
                                                            <MaskedInput
                                                                mask={[
                                                                    "(",
                                                                    /[1-9]/,
                                                                    /\d/,
                                                                    /\d/,
                                                                    ")",
                                                                    " ",
                                                                    /\d/,
                                                                    /\d/,
                                                                    /\d/,
                                                                    "-",
                                                                    /\d/,
                                                                    /\d/,
                                                                    /\d/,
                                                                    /\d/,
                                                                ]}
                                                                guide={false}
                                                                id="phone"
                                                                name="phone"
                                                                //   style={{
                                                                //     borderBottomColor:
                                                                //       errors.phone && touched.phone ? "red" : "",
                                                                //   }}
                                                                value={values.phone}
                                                                placeholder="Phone"
                                                                type="tel"
                                                                fullWidth
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                className={classes.appformMobileNumber}
                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <CommentIcon className={classes.inputIconsColor} />
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                            />
                                                            {errors.email && (
                                                                <div className={classes.text_danger}>{errors.email}</div>
                                                            )}
                                                        </div>
                                                        <div >
                                                            <TextField
                                                                label="notes"
                                                                fullWidth
                                                                name="notes"
                                                                type="notes"

                                                                InputProps={{
                                                                    endAdornment: (
                                                                        <InputAdornment position="end">
                                                                            <CommentIcon className={classes.inputIconsColor} />
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                                // error={values.notes === '' ? true : false}
                                                                value={values.notes}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                            />
                                                            {errors.notes && (
                                                                <div className={classes.text_danger}>{errors.notes}</div>
                                                            )}
                                                        </div>
                                                        <Button
                                                            type="submit"
                                                            color="rose"
                                                            size="lg"
                                                            round
                                                            style={{ marginLeft: '27%' }}
                                                        >
                                                            Submit
                                                        </Button>
                                                    </div>
                                                </CardBody>

                                            </form>

                                        </Card>
                                    </GridItem>
                                </GridContainer>
                            </div>
                        </Parallax >
                        <Footer />
                    </div>
                )
            }}
        </Formik>
    );
}
