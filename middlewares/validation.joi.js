const validatorHandler = (schema, property) => {
    try {
        return (req, res, next) => {
            const data = req[property];
            const { error } = schema.validate(data, { aboutEarly: false });

            if (error) {
                next(error)
            }

            next();
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = validatorHandler;