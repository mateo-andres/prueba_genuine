const getApiBaseUrl = () => {
  // In production, use the full Railway URL
  if (import.meta.env.PROD) {
    return "https://backgenuine-production.up.railway.app";
  }

  // In development, use the Vite proxy
  return "/api";
};

export const API_BASE_URL = getApiBaseUrl();

export const getApiUrl = (endpoint) => {
  const cleanEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;

  if (import.meta.env.DEV) {
    return `/api/${cleanEndpoint}`;
  }

  return `${API_BASE_URL}/${cleanEndpoint}`;
};
