export const Regex = {
    email: { pattern: new RegExp('^.*@.*$'), errorMessage: 'Invalid Email Address' },
    required: { errorMessage: '*Required'},
    name: { pattern: new RegExp('^[a-zA-Z-\\s\']*$'), errorMessage: 'Invalid Name'},
    address: { pattern: new RegExp('^[a-zA-Z0-9-\\s#\/\\.,]*$'), errorMessage: 'Invalid Address'},
    zip: { pattern: new RegExp('^[0-9]*$'), errorMessage: 'Invalid Zip'}
};
