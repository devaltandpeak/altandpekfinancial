import React, { useState } from 'react';
import { Card, TextField } from "@material-ui/core";
import { Email, People } from "@material-ui/icons";
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import CardBody from "components/Card/CardBody.js";
import styles from "styles/jss/nextjs-material-kit/pages/profilePage.js";
import Button from "components/CustomButtons/Button.js";

import { useFormik } from 'formik';
import * as yup from 'yup';

const useStyles = makeStyles(styles);

function CommonForm(props) {
    const classes = useStyles();
    const { ...rest } = props;
    const [submitted, setSubmitted] = useState(false)

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            // phone: '',
            // UnsecureDebtAmount: ''
        },
        onSubmit: () => {
            console.log("formik.valuessss", formik.values);
            setSubmitted(true)
         },
        validationSchema: yup.object({
            firstName: yup.string().trim().required('First Name is required'),
            lastName: yup.string().trim().required('Last Name is required'),
            // phone: yup.string().trim().required('Phone is required'),
            email: yup.string()
                .email('Must be a valid email')
                .required('Email is required'),
        }),
    });
    console.log("formik.values", formik.values, submitted);
    return (

        <Parallax>
            <div className={classes.container} >
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                        <Card style={{ marginTop: '100px' }}>
                            <form className={classes.form} onSubmit={formik.handleSubmit}>
                                <CardBody>
                                    <div>
                                        <TextField
                                            id="firstName"
                                            label="First Name"
                                            fullWidth
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <People className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            // error={(formik.values.firstName === '' && submitted) ? true : false}
                                            value={formik.values.firstName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.firstName && (
                                            <div className={classes.text_danger}>{formik.errors.firstName}</div>
                                        )}
                                    </div>
                                    <div>
                                        <TextField
                                            label="Last Name"
                                            id="lastName"
                                            fullWidth
                                            InputProps={{
                                                type: "text",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <People className={classes.inputIconsColor} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            // error={formik.values.lastName === '' ? true : false}
                                            value={formik.values.lastName}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.lastName && (
                                            <div className={classes.text_danger}>{formik.errors.lastName}</div>
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
                                            // error={formik.values.email === '' ? true : false}
                                            value={formik.values.email}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.email && (
                                            <div className={classes.text_danger}>{formik.errors.email}</div>
                                        )}
                                    </div>
                                    <div>
                                        <TextField
                                            label="Phone"
                                            id="phone"
                                            fullWidth
                                            InputProps={{
                                                type: "phone",
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <PhoneIcon className={classes.inputIconsColor}>
                                                            PhoneIcon
                                                        </PhoneIcon>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            // error={formik.values.phone === '' ? true : false}
                                            value={formik.values.phone}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.phone && (
                                            <div className={classes.text_danger}>{formik.errors.phone}</div>
                                        )}
                                    </div>
                                </CardBody>
                                <Button
                                    type="submit"
                                    color="rose"
                                    size="lg"
                                    round
                                    style={{ marginLeft: '27%' }}
                                >
                                    Continue
                                </Button>
                            </form>
                        </Card>
                    </GridItem>
                </GridContainer>
            </div>
        </Parallax >
    );
}

export default CommonForm;