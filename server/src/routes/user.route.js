import {Router} from 'express'
import { 
    registerUser,
    verifyEmail,
    login,
    logout,
    uploadAvatar
 } from '../controllers/user.controller.js'
import verifyJWT from '../middleware/auth.middleware.js'
import upload from '../middleware/multer.middleware.js'
const router = Router()

router.route("/register").post(registerUser)
router.route("/verifyEmail").post(verifyEmail)
router.route("/login").post(login)
router.route("/logout").get(verifyJWT,logout)
router.route("/uploadAvatar").post(verifyJWT,upload.single("avatar"),uploadAvatar)
export default router