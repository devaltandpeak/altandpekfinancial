import React, { useState } from 'react';
import { Card, MenuItem, TextField } from "@material-ui/core";
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

// import { useFormik } from 'formik';
// import * as yup from 'yup';
import MaskedInput from "react-text-mask";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Formik } from "formik";
import * as Yup from "yup";
import cuid from "cuid";
import { useRouter } from 'next/router';
const useStyles = makeStyles(styles);

function CommonLastForm(props) {
    const query = useRouter();

    const classes = useStyles();
    const { postData } = props;


    const [submitted, setSubmitted] = useState(false)
    const [ipAddress, setipAddress] = useState("");
    fetch("https://extreme-ip-lookup.com/json")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            setipAddress(json.query);
        });


    const DebtAmount = [
        {
            value: '100',
            label: '100',
        },
        {
            value: '200',
            label: '200',
        },
        {
            value: '300',
            label: '300',
        },
        {
            value: '400',
            label: '400',
        },
    ];

    return (
        <Formik
            initialValues={{
                phone: '',
                UnsecureDebtAmount: ''
            }}
            validationSchema={Yup.object().shape({
                phone: Yup.string()
                    .required("Mobile is required")
                    .matches(
                        /^\D?((?!1)[0-9]\d{2})\D?\D?(\d{3})\D?(\d{4})$/,
                        "Mobile number is not valid"
                    ),
                UnsecureDebtAmount: Yup.string().trim().required('Unsecure Debt Amount is required'),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log("formik.valuessss", values);
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

                const handleAmount = (val) => {
                    setAmount(val.target.value);
                    values.UnsecureDebtAmount = val.target.value;
                    delete errors.UnsecureDebtAmount;
                };
                const SubmitLead = () => {
                    // console.log("values", values, postData);
                    const cleanphone = values.phone.replace(/[\W]/g, "");
                    const leadTypeSperator = query.route.split('/')
                    const leadType = leadTypeSperator.slice(-1).pop();
                    const data = {
                        firstName: postData.firstName,
                        lastName: postData.lastName,
                        email: postData.email,
                        phone: cleanphone,
                        debtAmount: debtAmount,
                        IpAddress: ipAddress,
                        leadType: leadType,
                        aapfid: cuid(),
                        phoneVerified: "No"
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
                        "https://phplaravel-802492-2747645.cloudwaysapps.com/api/postSandBoxLead";
                    fetch(apiUrl, options)
                        .then((response) => {
                            console.log("response", response);
                            alert(
                                "Your improved credit score is on its way. \nOne of our credit specialist will reach out to you within 24 hours."
                            );
                            window.location.href = "/";
                            return response;
                        })
                        .catch((error) => {
                            alert(
                                "Sorry, your form could not be submitted, please try again later today."
                            );
                            window.location.href = "/";
                        });
                }
                return (
                    <div>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <div style={{
                                marginBottom: '20px',
                                width: '80%',
                                marginLeft: '10%'
                            }}>
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
                                />
                                {errors.phone && (
                                    <div className={classes.text_danger}>{errors.phone}</div>
                                )}
                            </div>
                            <div style={{
                                marginBottom: '30px', width: '80%',
                                marginLeft: '10%'
                            }}>
                                <TextField
                                    id="UnsecureDebtAmount"
                                    name="UnsecureDebtAmount"
                                    select
                                    fullWidth
                                    label="Amount"
                                    value={debtAmount}
                                    onChange={handleAmount}
                                    onBlur={handleAmount}
                                >
                                    {DebtAmount.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <Button
                                type="submit"
                                color="rose"
                                size="lg"
                                round
                                onClick={SubmitLead}
                                style={{ marginLeft: '27%' }}
                            >
                                Submit
                            </Button>
                        </form>
                    </div>
                )
            }}
        </Formik>


    );
}

export default CommonLastForm;