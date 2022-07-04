var ctx = document.getElementById("myChart");

var stars = [7000, 6680, 7200];
var frameworks = ["Meio Ambiente", "Educação", "Saúde"];

var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "VoluntaRio",
        data: stars,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ]
      }
    ]
  }
});

