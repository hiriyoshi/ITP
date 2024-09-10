const express = require('express');
const router = express.Router();
const {createPost,getAllPosts,getPost,updatePost,deletePost}=require('../controller/post');

router.post("/",createPost);
router.get("/", getAllPosts);
router.get("/:id",getPost);
router.patch("/:id",updatePost);
router.delete("/:id",deletePost);
module.exports = router;