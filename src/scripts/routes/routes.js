import List from '../views/pages/list';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': List,
  '/detail/:id': Detail,
  '/favorite': Like,
};

export default routes;
