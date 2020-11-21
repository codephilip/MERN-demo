const express = require('express');
const Posts = require('../../models/Posts');
const router = express.Router();

//posts Model




// @routes UPDATE api/posts
// @desc Update post
router.patch('/:id', verify, async(req,res) => {
    try{
        const posts = await Posts.findByIdAndUpdate(req.params.id, req.body);
        if(!posts) throw Error('Could Not update!')
        res.status(200).json(posts);

    }
    catch(err){
        res.status(400).json({msg: err})
    }
});



// @routes DELETE api/posts
// @desc Delete post
router.delete('/:id', async(req,res) => {
    try{
        const posts = await Posts.findByIdAndDelete(req.params.id);
        if(!posts) throw Error('Could Not delete!')
        res.status(200).json(posts);

    }
    catch(err){
        res.status(400).json({msg: err})
    }
});



// @routes GET api/posts
// @desc GET All posts
router.get('/', async(req,res) => {
    try{
        const posts = await Posts.find();
        if(!posts) throw Error('No Items found!')
        res.status(200).json(posts);

    }
    catch(err){
        res.status(400).json({msg: err})
    }
});

// @routes GET api/posts
// @desc GET post by ID
router.get('/:id', async(req,res) => {
    try{
        const post = await Posts.findById(req.params.id);
        if(!post) throw Error('No Item found!')
        res.status(200).json(post);

    }
    catch(err){
        res.status(400).json({msg: err})
    }
});


// @routes Post api/posts
// @desc Create post

router.post('/', async (req,res) => {
    //res.send(`Lets Create post!`);
    //console.log(req.body);
    const newPost = new Posts(req.body);

    try{
        const post = await newPost.save();
        if(!post) throw Error('Something went wrong while saving the post');
        res.status(200).json(post);
    }
    catch(err){
        res.status(400).json({msg: err})
    }
});

module.exports = router;