import React from "react";

// set the defaults
const AddressContext = React.createContext({
    address: {
    firstName: 'usecontext',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: ''},
    setAddress: () => {}
});

export default AddressContext;
