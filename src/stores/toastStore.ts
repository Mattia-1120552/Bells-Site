import { useToast } from 'primevue/usetoast'

export const useToastStore = () => {
  const toast = useToast()

  const showToast = (
    severity: 'success' | 'error' | 'info' | 'warn',
    summary: string,
    detail: string,
    life = 3000,
  ) => {
    toast.add({
      severity,
      summary,
      detail,
      life,
    })
  }

  return { showToast }
}
