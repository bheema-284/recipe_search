async function getData(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

function appendData(categories, data, a, b, c) {
  data.innerHTML = null;
  if (a == "strMeal") {
    categories.forEach((el) => {
      let div = document.createElement("div");
      div.id = "gridimg";
      let img = document.createElement("img");
      img.src = el.strMealThumb;
      img.addEventListener("click", function () {
        clicked(el);
      });
      let p = document.createElement("h1");
      p.innerText = el.strMeal;
      div.append(img, p);
      data.append(div);
    });
  }
}

function clicked(el) {
  let arr;
  if (localStorage.getItem("recepie") == null) {
    arr = [];
    arr.push(el);
  } else arr = JSON.parse(localStorage.getItem("recepie"));
  if (arr != null) {
    arr.push(el);
    arr.shift(el);
  }
  localStorage.setItem("recepie", JSON.stringify(arr));
  window.location.href = "ingred.html";
}

function ingredient(data, id) {
  let div1 = document.createElement("div");
  div1.id = "headingtext";
  let h1 = document.createElement("h1");
  h1.innerText = `${data.strCategory}/${data.strMeal} Recepie -`;
  let h11 = document.createElement("h1");
  h11.innerText = `Required Ingredients-`;

  div1.append(h1, h11);
  let main1 = document.createElement("div");
  let div2 = document.createElement("div");
  let img = document.createElement("img");
  img.src = data.strMealThumb;
  div2.append(img);
  main1.append(div2);
  let main2 = document.createElement("ul");
  main2.id = "main2ul";

  let p1 = document.createElement("li");
  p1.innerHTML = `${data.strIngredient1}  =======> ${data.strMeasure1}`;
  let p2 = document.createElement("li");
  p2.innerHTML = `${data.strIngredient2}  =======> ${data.strMeasure2}`;
  let p3 = document.createElement("li");
  p3.innerHTML = `${data.strIngredient3}  =======> ${data.strMeasure3}`;
  let p4 = document.createElement("li");
  p4.innerHTML = `${data.strIngredient4}  =======> ${data.strMeasure4}`;
  let p5 = document.createElement("li");
  p5.innerHTML = `${data.strIngredient5}  =======> ${data.strMeasure5}`;
  let p6 = document.createElement("li");
  p6.innerHTML = `${data.strIngredient6}  =======> ${data.strMeasure6}`;
  let p7 = document.createElement("li");
  p7.innerHTML = `${data.strIngredient7}  =======> ${data.strMeasure7}`;
  let p8 = document.createElement("li");
  p8.innerHTML = `${data.strIngredient8}  =======> ${data.strMeasure8}`;
  let p9 = document.createElement("li");
  p9.innerHTML = `${data.strIngredient9}  =======> ${data.strMeasure9}`;
  main2.append(p1, p2, p3, p4, p5, p6, p7, p8, p9);
  id.append(div1);
  let final = document.createElement("div");
  let hx = document.createElement("h2");
  hx.innerHTML = `Process to make ${data.strMeal}-`;
  final.id = "finalappend";
  final.append(main1, main2);
  id.append(final);
  let way = document.createElement("div");
  way.id = "way";
  let h2 = document.createElement("h3");
  h2.innerHTML = data.strInstructions;
  way.append(hx, h2);
  id.append(way);
}
export { getData, appendData, ingredient };
