function calculate() {
  const principalAmount = document.getElementById("principal");
  const interestRate = document.getElementById("rate");
  const years = document.getElementById("year");
  const total = document.getElementById("total-amount");

  let principal = Number(principalAmount.value);
  let rate = Number(interestRate.value / 100);
  let year = Number(years.value);

  const count = principal * Math.pow(1 + rate / 1, 1 * year);

  if (principal < 0 || isNaN(principal)) {
    principal = 0;
    principalAmount.value = 0;
  }
  if (rate < 0 || isNaN(rate)) {
    rate = 0;
    interestRate.value = 0;
  }
  if (year < 0 || isNaN(year)) {
    year = 0;
    years.value = 0;
  }

  total.textContent = count.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });
}
