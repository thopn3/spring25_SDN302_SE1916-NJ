const verifyAuthen = (req, res, next) => {
    const access = req.get('x-access')
    if(!access)
        return res.status(401).json({message: 'Not Permission!'})
    if(access !== 'admin')
        return res.status(403).json({message: 'You are not access!'})
    // Decode -> Read payload -> ...
    next()
}

const notFound = (req, res, next) => {
    res.status(404).send('End-point not found')
}

module.exports = {verifyAuthen, notFound}