"use server";
import MarketplaceAPI from "@/lib/marketplace-api";

export async function approveAgent(
  agentId: string,
  version: number,
  comment: string,
) {
  const api = new MarketplaceAPI();
  await api.approveAgentSubmission(agentId, version, comment);
  console.debug(`Approving agent ${agentId}`);
}

export async function rejectAgent(
  agentId: string,
  version: number,
  comment: string,
) {
  const api = new MarketplaceAPI();
  await api.rejectAgentSubmission(agentId, version, comment);
  console.debug(`Rejecting agent ${agentId}`);
}

export async function getReviewableAgents() {
  const api = new MarketplaceAPI();
  return api.getAgentSubmissions();
}

export async function getFeaturedAgents(
  page: number = 1,
  pageSize: number = 10,
) {
  const api = new MarketplaceAPI();
  const featured = await api.getFeaturedAgents(page, pageSize);
  console.debug(`Getting featured agents ${featured.agents.length}`);
  return featured;
}

export async function getFeaturedAgent(agentId: string) {
  const api = new MarketplaceAPI();
  const featured = await api.getFeaturedAgent(agentId);
  console.debug(`Getting featured agent ${featured.agentId}`);
  return featured;
}

export async function addFeaturedAgent(
  agentId: string,
  categories: string[] = ["featured"],
) {
  const api = new MarketplaceAPI();
  await api.addFeaturedAgent(agentId, categories);
  console.debug(`Adding featured agent ${agentId}`);
}

export async function removeFeaturedAgent(
  agentId: string,
  categories: string[] = ["featured"],
) {
  const api = new MarketplaceAPI();
  await api.removeFeaturedAgent(agentId, categories);
  console.debug(`Removing featured agent ${agentId}`);
}
