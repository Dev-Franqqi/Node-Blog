const Blog = require('../modules/blog');


const getHomePage = (req,res)=>{
    res.redirect('/blogs')

}

const getAllBlogs = (req,res)=>{
    Blog.find()
    .then(result => {
        res.render('index',{title:'All Blogs',blogs:result})

    })
    .catch(err => {console.log(err)})
}

const postBlog=(req,res)=>{
    console.log(req.body);
    const blog = new Blog(req.body);
     blog.save()
     .then(result=>{
       
        res.redirect('/blogs')
       
     })
     .catch(error => console.log(error))

}

const getTheAboutPage = (req,res)=>{
   
    
    res.render('about',{title:'ABOUT'})
}

const createTemplateBlog = (req,res)=>{
    res.render('create',{title:"CREATE A NEW BLOG"})
}

const getABlog = (req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then(result=>{
        res.render('details',{title:'Details',blog:result})
    })
    .then(err=>console.log(err))
}
const deleteBlog = (req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result=>{
        res.json({redirect:'/blogs'})

    })
    .catch(err=>console.log(err))
}

const getErrorPage = (req,res)=>{


    res.status(404).render('error',{title:"404 Not Found"})
}




module.exports = {
    getHomePage,
    getAllBlogs,
    postBlog,
    getTheAboutPage,
    createTemplateBlog,
    getABlog,
    deleteBlog,
    getErrorPage





}