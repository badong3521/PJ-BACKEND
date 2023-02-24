import DataResponse from '../model/dataResponse';
import {
    ERROR_CODE
} from './../../../types/ErrorsCode.ts';
import UserAuthService from '../../../services/auth/UserAuthService.ts';
import {
    setTokenCookie
} from '../../utils/setCookie';

class AuthController {
    constructor() {}
    async login(req, res, next) {
        const {
            email,
            password
        } = req.body;
        const response = await UserAuthService.authenticate({
            email,
            password
        });
        if (response.errorCode === ERROR_CODE.FAILED) {
            res.status(403).json(new DataResponse(403, response.message, response.data));
        } else {
            const refresh_token = response.data.refresh_token;
            setTokenCookie(res, refresh_token);
            res.status(200).json(new DataResponse(200, response.message, response.data));
        }
    }
    // async logout(req, res, next) {
    //     // accept token fro,body ,    const token = req.body.token || req.cookies.refreshToken;
    //     const response = await UserAuthService.revokeToken({
    //         token
    //     });
    //     if (response.errorCode === ERROR_CODE.FAILED) {
    //         res.status(403).json(new DataResponse(200, response.message, response.data));
    //     } else {
    //         res.status(200).json(new DataResponse(200, response.message, response.data));
    //     }
    // }
    // async logoutAll(req, res, next) {
    //     const token = req.body.token || req.cookies.refresh_token;
    //     const response = await UserAuthService.removeAllRefreshToken({
    //         token
    //     });
    //     if (response.errorCode === ERROR_CODE.FAILED) {
    //         res.status(403).json(new DataResponse(200, response.message, response.data));
    //     } else {
    //         res.status(200).json(new DataResponse(200, response.message, response.data));
    //     }
    // }
    // async refreshToken(req, res, next) {
    //     const token = req.cookies.refresh_token;
    //     const response = await UserAuthService.refreshToken({
    //         token
    //     });
    //     if (response.errorCode === ERROR_CODE.FAILED) {
    //         res.status(403).json(new DataResponse(403, response.message, response.data));
    //     } else {
    //         const refresh_token = response.data.refresh_token;
    //         setTokenCookie(res, refresh_token);
    //         res.status(200).json(new DataResponse(200, response.message, response.data));
    //     }
    // }
}
export default new AuthController();