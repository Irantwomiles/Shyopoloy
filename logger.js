function logMessage(msg) {
    console.log(`[Log] ${msg}`);
}

function logWarning(msg) {
    console.log(`[Warning] ${msg}`);
}

function logError(msg) {
    console.log(`[Error] ${msg}`);
}

module.exports = {
    logMessage,
    logWarning,
    logError
}