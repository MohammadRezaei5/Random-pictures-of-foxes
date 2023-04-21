const randomBtn = document.querySelector(".random-btn");
const image = document.querySelector("#image-id");

const fetchData = async () => {
  const res = await fetch("https://randomfox.ca/floof/");
  const data = await res.json();
  const imageUrl = data.image;
  image.src = imageUrl;
};

fetchData();
randomBtn.addEventListener("click", fetchData);
