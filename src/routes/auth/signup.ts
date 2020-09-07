import { Request, Response, Router } from "express";
import LogService from "../../../config/winston";

const router = Router();

const logger = LogService.getInstance();

interface SignUpBody {
    name: string;
    email: string;
    pwd: string;
    grade: number;
    school: string;
    stdNum: string;
}

router.post("/", (req: Request, res: Response) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { name, email, pwd, grade, school, stdNum }: SignUpBody = req.body;
    let flag = true;

    if (name && email && pwd && grade && school && stdNum) flag = false;
    console.log(name, email, pwd, grade, school, stdNum);
    if (flag) {
        logger.error("Some field is null!");
        res.status(500).json({ msg: "school field is empty!" });
    }

    logger.info("Signup Success!");
    res.json({ msg: "Signup Success!" });
});

export default router;
