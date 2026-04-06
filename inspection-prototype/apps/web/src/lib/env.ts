type Env = {
  DATABASE_URL: string;
};

function getRequiredEnv(name: keyof Env): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const env: Env = {
  DATABASE_URL: getRequiredEnv("DATABASE_URL")
};
