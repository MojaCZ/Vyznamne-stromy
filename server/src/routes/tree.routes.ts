import express from 'express';
const router = express.Router();
// import con from '../dbCon';
import { GetTreeById} from '../controllers/get-trees/get-by-id.controller'
import { AddTreeUser} from '../controllers/add-trees/add-tree-user'
router.post('/', GetTreeById);
router.put('/', AddTreeUser);

export = router

