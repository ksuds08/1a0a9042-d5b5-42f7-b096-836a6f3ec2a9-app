// Auto-generated index.ts for Pages Functions routing
import type { Request } from 'itty-router';

import { ResumeTemplateGeneratorBackendHandler } from './ResumeTemplateGeneratorBackend';
import { ContentSuggestionBackendHandler } from './ContentSuggestionBackend';
import { AIEngineBackendHandler } from './AIEngineBackend';
import { TemplateLibraryBackendHandler } from './TemplateLibraryBackend';

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === "/api/ResumeTemplateGeneratorBackend") return ResumeTemplateGeneratorBackendHandler(request);
  if (path === "/api/ContentSuggestionBackend") return ContentSuggestionBackendHandler(request);
  if (path === "/api/AIEngineBackend") return AIEngineBackendHandler(request);
  if (path === "/api/TemplateLibraryBackend") return TemplateLibraryBackendHandler(request);

  return new Response("Not found", { status: 404 });
}
