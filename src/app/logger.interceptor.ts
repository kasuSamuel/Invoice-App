import { HttpInterceptorFn } from '@angular/common/http';

export const loggerInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('Intercepting request:', req);

  const token = localStorage.getItem('token');
  const modifiedReq = token
    ? req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      })
    : req;
  return next(modifiedReq);
};
