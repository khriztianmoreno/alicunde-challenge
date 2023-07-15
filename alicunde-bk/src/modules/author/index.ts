import { Router } from 'express';

import {
  createHandler,
  getAllHandler,
  getBooksHandler,
  getByIdHandler,
  removeHandler,
  updateHandler,
} from './author.controller';

const router = Router();

router.get('/', getAllHandler);
router.get('/:id', getByIdHandler);
router.get('/:id/books', getBooksHandler);
router.post('/', createHandler);
router.patch('/:id', updateHandler);
router.delete('/:id', removeHandler);

export default router;
