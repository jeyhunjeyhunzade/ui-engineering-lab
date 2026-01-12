// index.js
const button = document.getElementById("load-chart");

button.addEventListener("click", async () => {
  // Chart library NOT loaded until button is clicked
  const ChartJS = await import("chart.js");

  // Now use it
  new ChartJS.Chart(ctx, {
    type: "bar",
    data: myData,
  });
});
