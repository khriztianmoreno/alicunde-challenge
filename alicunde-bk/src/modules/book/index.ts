import { Router } from 'express';

import {
  createHandler,
  getAllHandler,
  getAuthorsHandler,
  getByIdHandler,
  removeHandler,
  updateHandler,
  getPagesByChapterHandler,
} from './book.controller';

const router = Router();

router.get('/', getAllHandler);
router.get('/:id', getByIdHandler);
router.get('/:id/authors', getAuthorsHandler);
router.post('/', createHandler);
router.patch('/:id', updateHandler);
router.delete('/:id', removeHandler);
router.get('/:id/pages', getPagesByChapterHandler);

export default router;
