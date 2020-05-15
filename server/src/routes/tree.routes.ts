import express from 'express';
const router = express.Router();
// import con from '../dbCon';
import {addTree, getTree} from '../controllers/tree.controller'

router.post('/', getTree);
router.put('/', addTree);

export = router