import 'react';

export interface WebMCPToolDefinition {
  name: string;
  description: string;
  inputSchema?: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<unknown> | unknown;
}

export interface NavigatorModelContext {
  registerTool?: (tool: WebMCPToolDefinition) => void;
  unregisterTool?: (name: string) => void;
}

declare global {
  interface Navigator {
    modelContext?: NavigatorModelContext;
  }
}

declare module 'react' {
  interface FormHTMLAttributes<T> extends HTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
  }

  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    toolparamdescription?: string;
  }

  interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    toolparamdescription?: string;
  }
}

export {};
