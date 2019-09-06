"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var meta_1 = require("../data/meta");
/**
 * validates if a valid player tries to request data from a valid play
 */
function validatedRequest(req, res, after) {
    var isValidRequest = isValid(req, res);
    if (isValidRequest) {
        after(req, res);
    }
}
exports.validatedRequest = validatedRequest;
function isValid(req, res) {
    var gameId = req.query.gameId;
    if (!gameId || gameId !== meta_1.getGameId()) {
        res.status(403).send({ "message": "no valid game ID. Go away or assign to the game first with /assign or reset the game with /reset" });
        return false;
    }
    var playerId = req.query.playerId;
    if (!meta_1.isValidPlayer(playerId)) {
        res.status(403).send({ "message": "no valid player ID (" + playerId + "). Go away or assign to the game first with /assign" });
        return false;
    }
    return true;
}
