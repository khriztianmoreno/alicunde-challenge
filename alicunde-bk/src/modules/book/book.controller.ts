import { Request, Response, NextFunction } from 'express';

import {
  createBook,
  deleteBook,
  getAllBooks,
  getBookAuthors,
  getBookById,
  updateBook,
  getPagesByChapter,
} from './book.service';

export async function getAllHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const books = await getAllBooks();
    return res.status(200).json(books);
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
    const book = await getBookById(Number(req.params.id));

    if (!book) {
      return res.status(404).json({
        message: 'Book not found',
      });
    }

    return res.status(200).json(book);
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
    const book = await createBook(req.body);
    return res.status(201).json(book);
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
    const book = await getBookById(Number(req.params.id));

    if (!book) {
      return res.status(404).json({
        message: 'Book not found',
      });
    }

    const updatedBook = await updateBook(Number(req.params.id), req.body);
    return res.status(200).json(updatedBook);
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
    const book = await getBookById(Number(req.params.id));

    if (!book) {
      return res.status(404).json({
        message: 'Book not found',
      });
    }

    await deleteBook(Number(req.params.id));
    return res.status(204).end();
  } catch (error) {
    return next(error);
  }
}

export async function getAuthorsHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const book = await getBookAuthors(Number(req.params.id));

    if (!book) {
      return res.status(404).json({
        message: 'Book not found',
      });
    }

    return res.status(200).json(book);
  } catch (error) {
    return next(error);
  }
}

export async function getPagesByChapterHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const book = await getPagesByChapter(Number(req.params.id));

    if (!book) {
      return res.status(404).json({
        message: 'Book not found',
      });
    }

    return res.status(200).json(book);
  } catch (error) {
    return next(error);
  }
}
