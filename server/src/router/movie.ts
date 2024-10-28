import Express from 'express';
import { Movie } from '../service/movie';
import { ResponseHelper } from './responseHelper';
import { Condition } from '../types';

const router = Express.Router();

router.get('/:id', async (req, res, next) => {
  const result = await Movie.findById(+req.params.id);
  if (result) {
    ResponseHelper.sendData(result, res);
  } else {
    ResponseHelper.sendError('id is not exits', res);
  }
});

router.get('/', async (req, res, next) => {
  const { offset, limit } = req.query;

  const condition: Condition = {};

  if (offset) {
    condition.offset = +offset;
    delete req.query.offset;
  }
  if (limit) {
    condition.limit = +limit;
    delete req.query.limit;
  }
  Object.assign(condition, { where: req.query });

  const result = await Movie.find(condition);
  ResponseHelper.sendPageData(result, res);
});

router.post('/', async (req, res, next) => {
  const result = await Movie.add(req.body);
  if (Array.isArray(result)) {
    ResponseHelper.sendError(result, res);
  } else {
    ResponseHelper.sendData(true, res);
  }
});

router.put('/:id', async (req, res, next) => {
  const result = await Movie.update(+req.params.id, req.body);

  if (Array.isArray(result)) {
    ResponseHelper.sendError(result, res);
  } else {
    if (result.affected) {
      ResponseHelper.sendData(true, res);
    } else {
      ResponseHelper.sendError('id is not exits', res);
    }
  }
});

router.delete('/:id', async (req, res, next) => {
  const result = await Movie.delete(+req.params.id);
  if (result.affected) {
    ResponseHelper.sendData(true, res);
  } else {
    ResponseHelper.sendError('id is not exits', res);
  }
});

export default router;
