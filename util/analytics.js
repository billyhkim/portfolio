const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const pageview = (url) => {
  window.gtag('config', trackingId, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
