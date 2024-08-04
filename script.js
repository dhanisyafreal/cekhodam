document.getElementById('khodamForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var birthdate = document.getElementById('birthdate').value;

    var khodamResult = calculateKhodam(name, birthdate);

    document.getElementById('khodamResult').textContent = khodamResult;
    document.getElementById('result').classList.remove('hidden');
});

function calculateKhodam(name, birthdate) {
    // Logika sederhana untuk menentukan khodam
    // Logika ini hanya contoh dan tidak memiliki dasar ilmiah atau spiritual

    var khodams = [
        "Kepala Banteng",
        "Bangkai Robot",
        "Jambul Bayi",
        "Buntut Sapi",
        "Kupu-kupu Beton",
        "Jari Jempol Naga",
        "Kelinci Berhidung Terompet",
        "Kuda Berkepala Semangka",
        "Singa Berbulu Kapas",
        "Gajah Berkumis Sikat",
        "Kucing Bersepatu Roda",
        "Ayam Bertopi Koboi",
        "Panda Penghisap Susu",
        "Ikan Bersepeda",
        "Burung Berkacamata Renang",
        "Serigala Berbulu Cendol",
        "Kerbau Berhidung Stroberi",
        "Babi Berkaki Pisang",
        "Kupu-kupu Berbaju Besi",
        "Buaya Berpita Merah",
        "Kucing Berbulu Kembang Kol",
        "Gajah Bersepatu Kuda",
        "Ular Berkepala Kelapa",
        "Katak Berkumis Jagung",
        "Kuda Berbulu Jagung",
        "Serigala Berkaus Kaki",
        "Ayam Berhidung Semangka",
        "Anjing Berkacamata Hitam",
        "Sapi Bertelinga Kapas",
        "Burung Bersepatu Olahraga",
        "Jerapah Berleher Kaktus",
        "Kambing Bersepatu Balet",
        "Gajah Berkepala Balon",
        "Kucing Berhidung Madu",
        "Kuda Laut Bersepatu Skating",
        "Tikus Berkumis Kacang",
        "Burung Berkepala Sosis",
        "Kelinci Berbaju Emas",
        "Kura-kura Berkecepatan Cahaya",
        "Ayam Berhidung Kaktus",
        "Anjing Berbulu Permen",
        "Bebek Bersepatu Tenis",
        "Ikan Bersepatu Kulit",
        "Katak Berbulu Kapas",
        "Burung Berbulu Buah Naga",
        "Kelinci Berhidung Jeruk",
        "Kucing Berbulu Marshmallow",
        "Ayam Berkepala Kelapa",
        "Jerapah Berbaju Sutra",
        "Kuda Bersepatu Lampu",
        "Singa Berkumis Kecap",
        "Gajah Berhidung Wortel",
        "Kelinci Berhidung Stroberi",
        "Ular Berkepala Jagung",
        "Kura-kura Berhidung Semangka",
        "Ayam Berkumis Sawi",
        "Burung Berkepala Pepaya",
        "Gajah Bersepatu Sandal",
        "Kucing Berkumis Lidi",
        "Kambing Berbulu Kaktus",
        "Serigala Berhidung Keju",
        "Ikan Bersepatu Bulu",
        "Kelinci Berbaju Bayam",
        "Jerapah Berhidung Pisang",
        "Kuda Berkumis Bawang",
        "Tikus Berkepala Brokoli",
        "Burung Berbulu Kelapa",
        "Ayam Berkumis Madu",
        "Anjing Berkepala Terong",
        "Kucing Berhidung Paprika",
        "Gajah Berbulu Rambutan",
        "Kura-kura Bersepatu Daun",
        "Kuda Laut Berbaju Sutra",
        "Burung Berkepala Bayam",
        "Singa Berhidung Jeruk",
        "Kelinci Berkumis Kelapa",
        "Gajah Berbulu Kecap",
        "Kuda Berkumis Stroberi",
        "Ayam Berbulu Melon",
        "Ular Berhidung Nangka",
        "Kucing Berkumis Semangka",
        "Burung Bersepatu Kaktus",
        "Kelinci Berhidung Anggur",
        "Anjing Berkumis Lada",
        "Gajah Berkumis Pisang",
        "Ayam Berhidung Tomat",
        "Kuda Laut Berkumis Lidi",
        "Kura-kura Berbulu Keju",
        "Kucing Bersepatu Jeruk",
        "Burung Berkepala Wortel",
        "Ayam Berbulu Permen",
        "Kuda Berkumis Anggur",
        "Tikus Berhidung Terong",
        "Burung Berkumis Kaktus",
        "Gajah Berbulu Sawi",
        "Kucing Berkumis Daun",
        "Anjing Berhidung Semangka"
    ];


    var index = (name.length + new Date(birthdate).getDay()) % khodams.length;
    return khodams[index];
}
