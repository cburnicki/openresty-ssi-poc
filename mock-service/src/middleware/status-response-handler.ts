import { Request, Response, NextFunction } from "express";

export function statusResponseHandler(req: Request, res: Response, next: NextFunction) {
    const code = (req.params.code || 500) as number;
    res.status(code);
    console.log('setting cache control header');
    res.setHeader('cache-control', 'max-age: 90');
    res.send();
}