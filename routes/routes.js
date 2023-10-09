const express = require('express');
const { getHomePage,
    getAllBlogs,
    postBlog,
    getTheAboutPage,
    createTemplateBlog,
    getABlog,
    deleteBlog,
    getErrorPage
} = require('../controllers/controller')
const router = express.Router();

//get home page
router.get('/',getHomePage)

//get all blogs
router.get('/blogs',getAllBlogs)

//post a blogs

router.post('/blogs', postBlog);
//get the about page 
router.get('/about',getTheAboutPage)


//template for creating a new blog
router.get('/blogs/create',createTemplateBlog);



router.get('/blogs/:id', getABlog)

router.delete('/blogs/:id',deleteBlog)


//404 page
router.use(getErrorPage)


module.exports = router;