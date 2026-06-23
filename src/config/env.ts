/**
 * Environment Configuration
 * This file contains environment-specific settings
 */

interface EnvConfig {
  isDev: boolean;
  isProd: boolean;
  apiUrl: string;
  supabaseUrl: string;
  supabaseKey: string;
}

const getEnv = (): EnvConfig => {
  const isDev = import.meta.env.DEV;
  const isProd = import.meta.env.PROD;

  return {
    isDev,
    isProd,
    apiUrl: import.meta.env.VITE_API_URL || "http://localhost:8080",
    supabaseUrl: import.meta.env.VITE_SUPABASE_URL || "",
    supabaseKey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || "",
  };
};

// Validate required environment variables
const validateEnv = () => {
  const env = getEnv();
  
  if (env.isProd) {
    if (!env.supabaseUrl || !env.supabaseKey) {
      throw new Error("Missing required Supabase environment variables in production");
    }
  }
  
  return env;
};

export const env = validateEnv();
export default env;
