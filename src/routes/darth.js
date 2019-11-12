import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.json(req.context.models.darth);
});

export default router;
