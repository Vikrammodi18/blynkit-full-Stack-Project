import {Router} from 'express'
import { 
    registerUser,
    verifyEmail,
    login,
    logout
 } from '../controllers/user.controller.js'
import verifyJWT from '../middleware/auth.middleware.js'
const router = Router()

router.route("/register").post(registerUser)
router.route("/verifyEmail").post(verifyEmail)
router.route("/login").post(login)
router.route("/logout").get(verifyJWT,logout)
export default router