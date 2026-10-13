function initStatcounter() {
    // 1. Masukkan konfigurasi akun Statcounter lo ke scope global
    window.sc_project = 13359259;
    window.sc_invisible = 1;
    window.sc_security = "e9680528";

    // 2. Buat elemen <script> secara dinamis
    var sc_script = document.createElement('script');
    sc_script.type = 'text/javascript';
    sc_script.async = true;
    
    // 3. Arahkan ke URL file tracker Statcounter yang valid
    sc_script.src = 'https://statcounter.com';

    // 4. Masukkan skripnya ke dalam tag <head> atau <body> halaman web
    if (document.head) {
        document.head.appendChild(sc_script);
    } else {
        document.body.appendChild(sc_script);
    }
    
    console.log("✅ Statcounter tracker berhasil dimuat, bro!");
}

// 5. Panggil fungsinya biar langsung jalan!
initStatcounter();
