const status = async (request, response) => {
    response.status(200).json({message:"Resource module is working fine."});
};

module.exports = {
    status
};