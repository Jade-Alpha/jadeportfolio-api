import { Router} from "express";
import { addAchievement, deleteAchievement, getAchievement, patchAchievement } from "../controllers/achievementControllers.js";
import { addExperience, deleteExperience, getExperience, patchExperience } from "../controllers/experiencesController.js";
import { addPost, deletePost, getPost, patchPost } from "../controllers/postsControllers.js";



  const router = Router()

router.post('/add-achievement', addAchievement)

router.post('/add-experience', addExperience)

router.post('/add-post', addPost)


router.get('/achievement', getAchievement)

router.get('/experience', getExperience)

router.get('/post', getPost)


router.patch('/achievement/:id', patchAchievement)

router.patch('/experience/:id',patchExperience)

router.patch('/post/:id', patchPost)


router.delete('/achievement/:id', deleteAchievement)

router.delete('/experience/:id', deleteExperience )

router.delete('/post/:id', deletePost )



 export default router