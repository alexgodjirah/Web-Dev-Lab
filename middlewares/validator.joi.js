const validatorHandler = (scheme, property) => {
    try {
        return (req, res, next) => {
            const data = req[property];
            const { error } = scheme.validate(data, { aboutEarly: false });

            if (error) {
                next(error)
            }
            next()
        }
    } catch (error) {
        console.log(error);
    }
}