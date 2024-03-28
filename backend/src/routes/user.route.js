import express from 'express';

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    console.log("User homepage route success")
    res.status(200).send('this is the user route');
});

export default userRouter;