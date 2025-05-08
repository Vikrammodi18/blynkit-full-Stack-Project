import {Router} from 'express'
import { 
    registerUser,
    verifyEmail,
    login
 } from '../controllers/user.controller.js'
const router = Router()

router.route("/register").post(registerUser)
router.route("/verifyEmail").post(verifyEmail)
router.route("/login").post(login)
export default router