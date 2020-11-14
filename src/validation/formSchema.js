import * as yup from "yup";


export default yup.object().shape({
    name: yup
    .string()
    .required("name is required")
    .min(2, "name must be at least 2 characters" ),
    size: yup
    .string(),
    specialIns: yup
    .string(),
    sauce: yup
    .string()
    .oneOf(["bbqSauce","garlicRanch", "spinachAlfredo", "buffalo"], "Sauce is required"),
    pepperoni: yup.boolean(),
    italianSauge: yup.boolean(),
    onions: yup.boolean(),
    extraCheese: yup.boolean(),
    substitute: yup.boolean()
})