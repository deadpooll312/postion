import Authorization from '../pages/Authorization';
import Main from '../pages/Main';
import UploadMap from '../pages/UploadMap';
import ShowMap from '../pages/ShowMap/ShowMap';

export const UPLOAD_MAP = '/upload/map';
export const SHOW_MAP = '/show/map';
export const LOGIN = '/login';
export const MAIN = '/';

export const ROUTES = [
  {
    isPrivate: false,
    exact: true,
    path: LOGIN,
    component: Authorization,
  },
  {
    isPrivate: true,
    exact: true,
    path: MAIN,
    component: Main,
  },
  {
    isPrivate: true,
    exact: true,
    path: UPLOAD_MAP,
    component: UploadMap,
  },
  {
    isPrivate: true,
    exact: true,
    path: SHOW_MAP,
    component: ShowMap,
  },
];
