const nama = document.getElementById("nama");
const tanggal = document.getElementById("tanggal");
const waktu = document.getElementById("waktu");
const list = document.getElementById("list");
const tombol = document.getElementById("tambah");

let data = JSON.parse(localStorage.getItem("jadwal")) || [];

tombol.onclick = () => {
  if (!nama.value || !tanggal.value || !waktu.value) {
    alert("Lengkapi semua data!");
    return;
  }

  data.push({
    nama: nama.value,
    tanggal: tanggal.value,
    waktu: waktu.value,
  });

  localStorage.setItem("jadwal", JSON.stringify(data));
  nama.value = "";
  tanggal.value = "";
  waktu.value = "";
  render();
};

function render() {
  list.innerHTML = "";

  data.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "jadwal";

    div.innerHTML = `
      <h4>${item.nama}</h4>
      <p>📅 ${item.tanggal}</p>
      <p>⏰ ${item.waktu}</p>
      <button class="hapus" onclick="hapus(${index})">Hapus</button>
    `;

    list.appendChild(div);
  });
}

function hapus(i) {
  data.splice(i, 1);
  localStorage.setItem("jadwal", JSON.stringify(data));
  render();
}

render();
