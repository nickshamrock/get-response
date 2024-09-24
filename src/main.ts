interface Data {
  id: number;
  name: string;
  status: string;
}

function fetchData() {
  fetch("https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response is not ok");
      }
      return response.json();
    })
    .then((data: Data[]) => {
      console.log(data);
    })
    .catch((err) => {
      console.error("Error:", err);
    });
}

fetchData();
