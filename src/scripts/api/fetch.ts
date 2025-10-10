const BASE_URL = import.meta.env.VITE_BACKEND_URL

export async function getMessage() {
  const response = await fetch(`${BASE_URL}/`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}
