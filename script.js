let jadwal = JSON.parse(localStorage.getItem("jadwal")) || [];

function tampilkanJadwal() {
  let list = document.getElementById("listJadwal");
  list.innerHTML = "";

  jadwal.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
            <strong>${item.nama}</strong><br>
            ${item.tanggal} - ${item.waktu}
            <br>
            <button onclick="hapusJadwal(${index})">Hapus</button>
        `;
    list.appendChild(li);
  });
}

function tambahJadwal() {
  let nama = document.getElementById("nama").value;
  let tanggal = document.getElementById("tanggal").value;
  let waktu = document.getElementById("waktu").value;

  if (nama === "" || tanggal === "" || waktu === "") {
    alert("Semua data harus diisi!");
    return;
  }

  jadwal.push({ nama, tanggal, waktu });
  localStorage.setItem("jadwal", JSON.stringify(jadwal));

  document.getElementById("nama").value = "";
  document.getElementById("tanggal").value = "";
  document.getElementById("waktu").value = "";

  tampilkanJadwal();
}

function hapusJadwal(index) {
  jadwal.splice(index, 1);
  localStorage.setItem("jadwal", JSON.stringify(jadwal));
  tampilkanJadwal();
}

tampilkanJadwal();
