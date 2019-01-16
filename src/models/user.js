function isGuest(req) {
    if (req.user) {
        return true;
    }
    return false;
}


exports.userName = (request) => {
    if (isGuest(request)) {
        return request.user.username;
    }
    return 'Guest';
};

exports.isGuest = isGuest;

