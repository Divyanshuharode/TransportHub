const roleMiddleware = (req, res, next) => {
    console.log(req.body)
    if (req.body.email === 'Divyanshuharode75@gmail.com') {
        // console.log("hiii")
        next();
        // console.log("hiii")
    } else {
        console.log("you are not aouthrized");
        return res.send({ message: 'you are not aouthrized' })
    }
}

module.exports = roleMiddleware; 