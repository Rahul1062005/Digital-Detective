import { Router } from "express";
import { getCase, listCases, submitAccusation } from "../controllers/caseController";
const router = Router();
router.get("/", listCases);
router.get("/:caseId", getCase);
router.post("/:caseId/accusation", submitAccusation);
export default router;
