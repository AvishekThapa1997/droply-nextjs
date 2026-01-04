import { relations, InferSelectModel, InferInsertModel } from "drizzle-orm";
import {
  doublePrecision,
  pgTable,
  text,
  timestamp,
  uuid,
  boolean,
  foreignKey,
} from "drizzle-orm/pg-core";

export const files = pgTable(
  "files",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    name: text("name").notNull(),
    path: text("path").notNull(),
    fileUrl: text("file_url").notNull(),
    size: doublePrecision("size").notNull(),
    userId: text("user_id").notNull(),
    parentId: uuid("parent_id"),
    isFolder: boolean("is_folder").notNull().default(false),
    isStarred: boolean("is_starred").notNull().default(false),
    isSafeDeleted: boolean("is_safe_deleted").notNull().default(false),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => {
    return [
      foreignKey({
        columns: [table.parentId],
        foreignColumns: [table.id],
      }),
    ];
  }
);

/*
    parent : Each file/folder can have one parent folder
    children : Each folder can have multiple children files/folders
*/
export const filesRelations = relations(files, ({ one, many }) => {
  return {
    parent: one(files, {
      fields: [files.parentId],
      references: [files.id],
    }),
    children: many(files),
  };
});
