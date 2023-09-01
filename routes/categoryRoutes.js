import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js';


const router= express.Router();

// routes
// Create Category
router.post('/create-category',
 requireSignIn,
 isAdmin,
 createCategoryController
 );
// update category
/* we pass middleware i.e signin hua tab hi update karna hai */
router.put('/update-category/:id',requireSignIn,isAdmin,updateCategoryController);

//getAll category
router.get('/get-category', categoryController);

// single category
router.get('/single-category/:slug', singleCategoryController);

// Delete category
router.delete("/delete-category/:id",requireSignIn,isAdmin, deleteCategoryController);
export default router;