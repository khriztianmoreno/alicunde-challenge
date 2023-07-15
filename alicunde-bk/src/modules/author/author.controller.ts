import { Request, Response, NextFunction } from 'express';

import {
  createAuthor,
  deleteAuthor,
  getAllAuthors,
  getAuthorBooks,
  getAuthorById,
  updateAuthor,
} from './author.service';

export async function getAllHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authors = await getAllAuthors();
    return res.status(200).json(authors);
  } catch (error) {
    return next(error);
  }
}

export async function getByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const author = await getAuthorById(Number(req.params.id));

    if (!author) {
      return res.status(404).json({
        message: 'Author not found',
      });
    }

    return res.status(200).json(author);
  } catch (error) {
    return next(error);
  }
}

export async function createHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const author = await createAuthor(req.body);
    return res.status(201).json(author);
  } catch (error) {
    return next(error);
  }
}

export async function updateHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const author = await getAuthorById(Number(req.params.id));

    if (!author) {
      return res.status(404).json({
        message: 'Author not found',
      });
    }

    const updatedAuthor = await updateAuthor(Number(req.params.id), req.body);
    return res.status(200).json(updatedAuthor);
  } catch (error) {
    return next(error);
  }
}

export async function removeHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const author = await getAuthorById(Number(req.params.id));

    if (!author) {
      return res.status(404).json({
        message: 'Author not found',
      });
    }

    await deleteAuthor(Number(req.params.id));
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
}

export async function getBooksHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const author = await getAuthorById(Number(req.params.id));

    if (!author) {
      return res.status(404).json({
        message: 'Author not found',
      });
    }

    const books = await getAuthorBooks(Number(req.params.id));
    return res.status(200).json(books);
  } catch (error) {
    return next(error);
  }
}
