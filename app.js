function copyRow(button) {
  const row = button.closest("tr");
  const cells = row.querySelectorAll("td");

  let text = "";

  cells.forEach((cell, index) => {
    // Skip the first cell (the button)
    if (index !== 0) {
      text += cell.innerText.trim() + "\t";
    }
  });

  navigator.clipboard.writeText(text.trim());

  button.innerText = "✅";
  setTimeout(() => (button.innerText = "📋"), 1200);
}


document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("table");
  const rows = table.querySelectorAll("tbody tr");

  // Add "Copy" header
  const headerRow = table.querySelector("thead tr");
  const copyTh = document.createElement("th");
  copyTh.innerText = "Copy";
  headerRow.prepend(copyTh);

  rows.forEach(row => {
    const td = document.createElement("td");
    const btn = document.createElement("button");

    btn.innerText = "📋";
    btn.className = "copy-btn";

    btn.onclick = () => {
      const cells = row.querySelectorAll("td");
      let text = "";

      cells.forEach((cell, i) => {
        if (i !== 0) text += cell.innerText.trim() + "\t";
      });

      navigator.clipboard.writeText(text.trim());

      btn.innerText = "✅";
      setTimeout(() => (btn.innerText = "📋"), 1000);
    };

    td.appendChild(btn);
    row.prepend(td);
  });
});


