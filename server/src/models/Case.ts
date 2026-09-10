import { InferSchemaType, Schema, model } from "mongoose";

const suspectSchema = new Schema({ id: { type: String, required: true }, name: { type: String, required: true }, role: { type: String, required: true }, description: { type: String, required: true }, statement: { type: String, required: true }, alibi: { type: String, required: true } }, { _id: false });
const evidenceSchema = new Schema({ id: { type: String, required: true }, title: { type: String, required: true }, type: { type: String, required: true }, description: { type: String, required: true }, discoveredAt: { type: String, required: true } }, { _id: false });
const timelineSchema = new Schema({ time: { type: String, required: true }, event: { type: String, required: true } }, { _id: false });
const solutionSchema = new Schema({ culpritId: { type: String, required: true }, attackSuspectId: { type: String, required: true }, necklaceLocation: { type: String, required: true }, explanation: { type: String, required: true } }, { _id: false });

const caseSchema = new Schema({
  caseId: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true }, subtitle: { type: String, required: true },
  status: { type: String, enum: ["open", "closed"], default: "open" },
  briefing: { type: String, required: true }, victim: { type: String, required: true },
  suspects: { type: [suspectSchema], default: [] }, evidence: { type: [evidenceSchema], default: [] },
  timeline: { type: [timelineSchema], default: [] }, solution: { type: solutionSchema, required: true },
}, { timestamps: true });

export type CaseDocument = InferSchemaType<typeof caseSchema>;
export const Case = model("Case", caseSchema);
