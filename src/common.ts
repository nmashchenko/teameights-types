/**
 * Represents entities with created and updated timestamps.
 */
export interface Timestamps {
  createdAt: Date;
  updatedAt: Date;
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
 * Represents entities that can be linked to external resources.
 */
export interface Linkable {
  url: string;
}

/**
 * Utility type for properties that can be a given type or null.
 */
export type Nullable<T> = T | null;
