import { Request, Response } from "express";
import { Case } from "../models/Case";

export const listCases = async (_req: Request, res: Response) => {
  const cases = await Case.find({}, "caseId title subtitle status victim").sort({ createdAt: -1 });
  res.json({ cases });
};

export const getCase = async (req: Request, res: Response) => {
  const investigation = await Case.findOne({ caseId: req.params.caseId }).select("-solution -__v");
  if (!investigation) return res.status(404).json({ message: "Case not found." });
  return res.json({ case: investigation });
};

export const submitAccusation = async (req: Request, res: Response) => {
  const { culpritId, attackSuspectId, necklaceLocation } = req.body as Record<string, unknown>;
  if (typeof culpritId !== "string" || typeof attackSuspectId !== "string" || typeof necklaceLocation !== "string") return res.status(400).json({ message: "culpritId, attackSuspectId, and necklaceLocation are required." });
  const investigation = await Case.findOne({ caseId: req.params.caseId });
  if (!investigation) return res.status(404).json({ message: "Case not found." });
  const answer = investigation.solution;
  const culpritCorrect = culpritId === answer.culpritId;
  const attackCorrect = attackSuspectId === answer.attackSuspectId;
  const locationCorrect = necklaceLocation.trim().toLowerCase() === answer.necklaceLocation.toLowerCase();
  const score = [culpritCorrect, attackCorrect, locationCorrect].filter(Boolean).length;
  return res.json({ solved: score === 3, score, total: 3, results: { culpritCorrect, attackCorrect, locationCorrect }, ...(score === 3 ? { solution: answer } : { message: "Not quite. Revisit the timeline and the physical evidence." }) });
};
