const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema
    .is().min(4)                                    // Minimum length 4
    .is().max(15)                                  // Maximum length 15
    //.has().uppercase()                              // Must have uppercase letters
    //.has().lowercase()                              // Must have lowercase letters
    //.has().digits()                                // Must have at least 1 digit
    //.has().not().symbols();                         // Has no symbols
    //.has().not().spaces()                           // Should not have spaces is a wrong rule to apply

module.exports = (req, res, next) => {
    if (passwordSchema.validate(req.body.pasword)) {
        next()
    } else {
        return res.status(400).json({ error: `le message n'est pas assez fort ${passwordSchema.validate('req.body.pasword', { list: true })}` })
    }
}