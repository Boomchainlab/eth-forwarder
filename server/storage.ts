import { db } from "./db";
import { deployments, type InsertDeployment, type Deployment } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getDeployments(): Promise<Deployment[]>;
  createDeployment(deployment: InsertDeployment): Promise<Deployment>;
  updateDeploymentRecipient(id: number, recipientAddress: string): Promise<Deployment | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getDeployments(): Promise<Deployment[]> {
    return await db.select().from(deployments);
  }

  async createDeployment(insertDeployment: InsertDeployment): Promise<Deployment> {
    const [deployment] = await db.insert(deployments).values(insertDeployment).returning();
    return deployment;
  }

  async updateDeploymentRecipient(id: number, recipientAddress: string): Promise<Deployment | undefined> {
    const [updated] = await db.update(deployments)
      .set({ recipientAddress })
      .where(eq(deployments.id, id))
      .returning();
    return updated;
  }
}

export const storage = new DatabaseStorage();
