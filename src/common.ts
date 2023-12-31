/**
 * Represents entities with created and updated timestamps.
 */
export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Nullable<Date>;
}
/**
 * Represents entities that have a unique identifier.
 */
export interface Identifiable {
  id: number;
}

/**
 * Represents entities with a name property.
 */
export interface NamedEntity {
  name: string;
}

/**
 * Utility type for properties that can be a given type or null.
 */
export type Nullable<T> = T | null;

/**
 * For any requests where find() is used
 */
export type InfinityPaginationResultType<T> = Readonly<{
  data: T[];
  hasNextPage: boolean;
}>;
