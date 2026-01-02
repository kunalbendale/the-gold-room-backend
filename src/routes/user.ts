import { Router } from "express";
import { protect } from "middleware/auth";
import { registerUser, authUser, logoutUser, getUserProfile, updateUserProfile } from "../controllers/user";

const router = Router();

router.post("/", registerUser);
router.post('/auth', authUser);
router.post('/logout', logoutUser);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
