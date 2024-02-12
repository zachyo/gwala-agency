export const formatAmount = (amount) => {
  if (!amount) amount = 0;
  const formatted = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(+amount / 100);

  return formatted.replace("NGN", "₦");
};
