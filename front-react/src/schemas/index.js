import * as yup from "yup";
import * as Yup from 'yup';
import { useFormik } from "formik";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
   name: yup.string().required().min(3),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup
        .string()
        .min(5)
        .matches(passwordRules, { message: "Please create a stronger password" })
        .required("Required"),
    dob: yup.date().required("Required"),
    parentName: yup.string().required("Required").min(3),
    parentPhone: yup.string().required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match")
        .required("Required"),

});

export const taskySchema = yup.object().shape({
    title: yup.string()
        .required("Title is required")
        .min(3, "Title must be at least 3 characters long")
        .max(255, "Title must not exceed 255 characters"),
        
    description: yup.string()
        .required("Description is required")
        .min(3, "Description must be at least 3 characters long")
        .max(500, "Description must not exceed 500 characters"),

    
    // deadline: yup.date()
    //     .required("Deadline is required")
    //     .typeError("Deadline must be a valid date"),


   
    // san7a: yup.mixed().required("Image is required") 
        
        
});


 export const ClassroomSchema = Yup.object().shape({
     name: Yup.string().required('Name is required'),
     level: Yup.string().required('Level is required'),
     admin_id: Yup.string().required('Admin must be selected'),
 });
 
 export const StudentclassSchema = Yup.object().shape({
     
     user_id: Yup.string().required('Admin must be selected'),
     classroom_id: Yup.string().required('class must be selected'),
 });
 
 