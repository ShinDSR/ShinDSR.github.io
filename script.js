const nama = document.querySelector("#nama");

nama.addEventListener('click', updateName);

function updateName(){
    const name = prompt('Masukkan nama:');
    nama.textContent = name;
}

const hari = document.querySelector("#hari");

hari.addEventListener('click', updateHari);

function updateHari(){
    const day = prompt('Masukkan hari: ')
    hari.textContent = day;
    if(day == 'Senin'|| day == 'senin'){
        document.getElementById('klh1').innerHTML = "Bahasa Inggris 2";
        document.getElementById('klh2').innerHTML = "Jaringan Komputer";
        document.getElementById('klh3').innerHTML = "Basis Data";
    }
    else if(day == 'Selasa'|| day == 'selasa'){
        document.getElementById('klh1').innerHTML = "Bahasa Indonesia";
        document.getElementById('klh2').innerHTML = "Fisika";
        document.getElementById('klh3').innerHTML = "Bahasa Inggris 1";
    }
    else if(day == 'Rabu'|| day == 'rabu'){
        document.getElementById('klh1').innerHTML = "Bahasa Asing";
        document.getElementById('klh2').innerHTML = "Aplikasi Mobile";
        document.getElementById('klh3').innerHTML = "Protokol Routng";
    }
    else if(day == 'Kamis'|| day == 'kamis'){
        document.getElementById('klh1').innerHTML = "Agama Islam 2";
        document.getElementById('klh2').innerHTML = "Manajemen Proyek";
        document.getElementById('klh3').innerHTML = "Web Design";
    }
    else if(day == 'Jumat'|| day == 'jumat'){
        document.getElementById('klh1').innerHTML = "Matematika";
        document.getElementById('klh2').innerHTML = "Pemrograman Dasar";
        document.getElementById('klh3').innerHTML = "Agama Islam 1";
    }
    else if(day == 'Sabtu'|| day == 'sabtu'|| day == 'Minggu'|| day == 'minggu'){
        document.getElementById('klh1').innerHTML = "Libur";
        document.getElementById('klh2').innerHTML = "Libur";
        document.getElementById('klh3').innerHTML = "Libur";
    }
    else{
        alert("No Result")
        document.getElementById('hari').innerHTML = "";
        document.getElementById('klh1').innerHTML = "";
        document.getElementById('klh2').innerHTML = "";
        document.getElementById('klh3').innerHTML = "";
    }
}