export const API_ENDPOINTS = {
  exams: '/api/exams',
  exam: (id) => `/api/exams/${id}`,
  analytics: '/api/analytics',
  settings: '/api/settings',
};

export const fetchWrapper = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};

export const apiClient = {
  get: (url) => fetchWrapper(url, { method: 'GET' }),
  post: (url, data) => fetchWrapper(url, { method: 'POST', body: JSON.stringify(data) }),
  put: (url, data) => fetchWrapper(url, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (url) => fetchWrapper(url, { method: 'DELETE' }),
};
