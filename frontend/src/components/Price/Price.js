import React from 'react';

export default function Price({ price, locale, currency }) {
  const formatPrice = () =>
    new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);

  return <span>{formatPrice()}</span>;
}

Price.defaultProps = {
  locale: 'en-IN',  // Changed from 'in' to 'en-IN'
  currency: 'INR'
};
