import {Router} from 'express'
import { 
    registerUser,
    verifyEmail,
    login,
    logout,
    uploadAvatar,
    updateUser,
    forgotPassword,
    verifyOTP,
    resetPassword,
    refreshAccessToken
 } from '../controllers/user.controller.js'
import verifyJWT from '../middleware/auth.middleware.js'
import upload from '../middleware/multer.middleware.js'
const router = Router()

router.route("/register").post(registerUser)
router.route("/verifyEmail").post(verifyEmail)
router.route("/login").post(login)
router.route("/logout").get(verifyJWT,logout)
router.route("/uploadAvatar").post(verifyJWT,upload.single("avatar"),uploadAvatar)
router.route("/updateUser").put(verifyJWT,updateUser)
router.route("/forgotPassword").put(forgotPassword)
router.route("/verifyOTP").put(verifyOTP)
router.route("/resetPassword").put(resetPassword)
router.route("/refreshAccessToken").get(refreshAccessToken)
export default router