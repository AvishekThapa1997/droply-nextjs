import { files } from "./schema";

type SelectFile = typeof files.$inferSelect;
type InsertFile = typeof files.$inferInsert;

/*NEW WAY*/
// type SelectUser2 = InferSelectModel<typeof files>;
// type InsertUser2 = InferInsertModel<typeof files>;
