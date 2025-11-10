export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ""

type GtagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
}

export const pageview = (url: string) => {
  if (!GA_MEASUREMENT_ID) return
  try {
    ;(window as any).gtag?.("config", GA_MEASUREMENT_ID, {
      page_path: url,
    })
  } catch (e) {
    // noop
  }
}

export const event = ({ action, category, label, value }: GtagEvent) => {
  if (!GA_MEASUREMENT_ID) return
  try {
    ;(window as any).gtag?.("event", action, {
      event_category: category,
      event_label: label,
      value,
    })
  } catch (e) {
    // noop
  }
}

export default { GA_MEASUREMENT_ID, pageview, event }
