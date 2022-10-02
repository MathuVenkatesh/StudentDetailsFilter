let clearBtn = document.getElementById("clear-btn");
let subjects = document.getElementById("subjects");
let from = document.getElementById("from");
let to = document.getElementById("to");
let filterBtn = document.getElementById("filter-btn");
let radioBtns = document.querySelectorAll('input[name="filter-radio"]');
let toLabel = document.getElementById("tolabel");

let dataObj = [
  {
    id: 0,
    name: "Janu",
    English: 50,
    Maths: 86,
    Science: 77,
    SocialScience: 88,
  },
  {
    id: 1,
    name: "Thanu",
    English: 75,
    Maths: 96,
    Science: 67,
    SocialScience: 91,
  },
  {
    id: 2,
    name: "Tara",
    English: 90,
    Maths: 35,
    Science: 86,
    SocialScience: 100,
  },
  {
    id: 3,
    name: "Glen",
    English: 79,
    Maths: 68,
    Science: 77,
    SocialScience: 78,
  },
  {
    id: 4,
    name: "Zara",
    English: 80,
    Maths: 85,
    Science: 96,
    SocialScience: 68,
  },
];

function renderTable(dataObj) {
  for (let i = 0; i < dataObj.length; i++) {
    document.getElementById("tbody").innerHTML += `
        <tr>
          <td>${dataObj[i].id + 1}</td>
          <td>${dataObj[i].name}</td>
          <td>${dataObj[i].English}</td>
          <td>${dataObj[i].Maths}</td>
          <td>${dataObj[i].Science}</td>
          <td>${dataObj[i].SocialScience}</td>
        </tr>`;
  }
}

function loadEventListeners() {
  clearBtn.addEventListener("click", clearInput);
  filterBtn.addEventListener("click", filterSub);
  radioBtns.forEach((elem) => {
    elem.addEventListener("click", hideToInput);
  });
}

function clearInput() {
  from.innerHTML = "";
  to.innerHTML = "";
  document.getElementById("tbody").innerHTML = "";
}

function hideToInput(e) {
  if (e.target.id === "between") {
    to.style.display = "";
    toLabel.style.display = "";
  } else {
    to.style.display = "none";
    toLabel.style.display = "none";
  }
  // to.className = "hidefirstinput";
}

function filterSub(e) {
  e.preventDefault();
  var selSub = document.getElementById("subjects");
  var selValue = selSub.value;
  let arr = [];
  let selectedOptId = document.querySelector(
    'input[name="filter-radio"]:checked'
  ).id;
  // filter by above
  if (selectedOptId === "above") {
    if (selValue === "eng") {
      arr = dataObj.filter((val) => {
        console.log(from.value);
        return val.English > from.value;
      });
    }
    if (selValue === "mat") {
      arr = dataObj.filter((val) => {
        console.log(from.value);
        return val.Maths > from.value;
      });
    }
    if (selValue === "sci") {
      arr = dataObj.filter((val) => {
        console.log(from.value);
        return val.Science > from.value;
      });
    }
    if (selValue === "social") {
      arr = dataObj.filter((val) => {
        console.log(from.value);
        return val.SocialScience > from.value;
      });
    }
    console.log(arr);
    clearInput();
    renderTable(arr);
  }

  //filer by below value
  if (selectedOptId === "below") {
    if (selValue === "eng") {
      arr = dataObj.filter((val) => {
        console.log(from.value);
        return val.English < from.value;
      });
    }
    if (selValue === "mat") {
      arr = dataObj.filter((val) => {
        console.log(from.value);
        return val.Maths < from.value;
      });
    }
    if (selValue === "sci") {
      arr = dataObj.filter((val) => {
        console.log(from.value);
        return val.Science < from.value;
      });
    }
    if (selValue === "social") {
      arr = dataObj.filter((val) => {
        console.log(from.value);
        return val.SocialScience < from.value;
      });
    }
    console.log(arr);
    clearInput();
    renderTable(arr);
  }

  // filter by between
  if (selectedOptId === "between") {
    if (selValue === "eng") {
      arr = dataObj.filter((val) => {
        console.log(from.value, to.value);
        return val.English >= from.value && val.English <= to.value;
      });
    }

    if (selValue === "mat") {
      arr = dataObj.filter((val) => {
        console.log(from.value, to.value);
        return val.Maths >= from.value && val.Maths <= to.value;
      });
    }
    if (selValue === "sci") {
      arr = dataObj.filter((val) => {
        console.log(from.value, to.value);
        return val.Science >= from.value && val.Science <= to.value;
      });
    }
    if (selValue === "social") {
      arr = dataObj.filter((val) => {
        console.log(from.value, to.value);
        return val.SocialScience >= from.value && val.SocialScience <= to.value;
      });
    }
    console.log(arr);
    clearInput();
    renderTable(arr);
  }
}

loadEventListeners();
renderTable(dataObj);
