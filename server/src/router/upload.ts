import Express from 'express';
import multer from 'multer';
import path from 'path';
import { ResponseHelper } from './responseHelper';

const storage = multer.diskStorage({
  destination: path.resolve(__dirname, '../../public/upload'),
  filename(req, file, cb) {
    const time = Date.now();
    const extname = path.extname(file.originalname);
    cb(null, `${time}${extname}`);
  },
});

const allowedExt = ['.png', '.jpg', '.jpeg', '.gif', '.bmp', '.tiff'];

const upload = multer({
  storage,
  limits: {
    fileSize: 1024 * 1024, // 限制上传文件大小最大 1MB
  },
  fileFilter(req, file, cb) {
    if (allowedExt.includes(path.extname(file.originalname))) {
      cb(null, true);
    } else {
      cb(new Error('Illegal files'));
    }
  },
}).single('poster');

const router = Express.Router();

router.post('/', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      ResponseHelper.sendError(err.message, res);
    } else {
      ResponseHelper.sendData(`upload/${req.file?.filename}`, res);
    }
  });
});

export default router;
