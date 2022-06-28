var ctx = document.getElementById("myChart");

var stars = [109966,110513 ,114000 ,112345 ,111760,112132,113227 ];
var frameworks = ["Turismo", "Saneamento", "Educação", "Saúde", "Esporte e Lazer", "Cultura", "Ecologia"];

var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: frameworks,
    datasets: [
      {
        label: "Procura por atividades voluntárias",
        data: stars,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
		  "rgba(270, 76, 244, 0.2)",
		  "rgba(149, 99, 143, 0.2)",
        ]
      }
    ]
  }
});

