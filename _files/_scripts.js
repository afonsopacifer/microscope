var tabs = {
  sample0: document.getElementById('global'),
  sample1: document.getElementById('atoms'),
  sample2: document.getElementById('molecules'),
  sample3: document.getElementById('organisms'),
  sample4: document.getElementById('templates'),
  sample5: document.getElementById('pages')
}

var content = {
  zero: document.getElementById("ms-content-0"),
  one: document.getElementById("ms-content-1"),
  two: document.getElementById("ms-content-2"),
  three: document.getElementById("ms-content-3"),
  four: document.getElementById("ms-content-4"),
  five: document.getElementById("ms-content-5")
}

for (tab in tabs) {
  // console.log(tabs[tab]);
  tabs[tab].addEventListener('click', function(event) {
    event.preventDefault();
    var $this = this;
    clearSelected();
    $this.classList.add("ms-selected");
    // console.log(this.id);

    clearActive();

    if ($this.id === "global") {
      content.zero.classList.add("ms-active");
    } else if ($this.id === "atoms") {
      content.one.classList.add("ms-active");
    } else if ($this.id === "molecules") {
      content.two.classList.add("ms-active");
    } else if ($this.id === "organisms") {
      content.three.classList.add("ms-active");
    } else if ($this.id === "templates") {
      content.four.classList.add("ms-active");
    } else {
      content.five.classList.add("ms-active");
    }
  });
}

function clearSelected() {
  for (tab in tabs) {
    tabs[tab].classList.remove("ms-selected");
  }
}
function clearActive() {
  for (element in content) {
    content[element].classList.remove("ms-active");
  }
}