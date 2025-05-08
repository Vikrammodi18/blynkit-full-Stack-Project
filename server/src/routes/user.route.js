import {Router} from 'express'
import { 
    registerUser,
    verifyEmail
 } from '../controllers/user.controller.js'
const router = Router()

router.route("/register").post(registerUser)
router.route("/verifyEmail").post(verifyEmail)
export default router