import { Request, Response, NextFunction } from "express";

export function delayHandler(req: Request, res: Response, next: NextFunction) {
    if (req.query.delay) {
        const delay = req.query.delay as number;
        delete req.query.delay;
        console.log(`delaying response by ${delay}ms...`);
        setTimeout(() => next(), delay);
    } else {
        next();
    }
}