# 🧠 Hamming SEC-DED Code Simülatörü

Bu proje, Hamming SEC-DED (Single Error Correction, Double Error Detection) algoritmasını kullanan etkileşimli bir web uygulamasıdır. Kullanıcılar veri girişi yapabilir, tek veya çift bitlik hata simülasyonu uygulayabilir, hataları tespit edip düzeltebilir. Eğitim amaçlı geliştirilmiştir.

---

## 🚀 Özellikler

- ✅ Hamming SEC-DED algoritması (1-bit düzeltme, 2-bit tespit)
- 💡 Parity bit hesaplama ve bit bazında görselleştirme
- 🧪 Tek veya çift bitlik hata simülasyonu
- 🔍 Syndrome hesaplaması ile hata tespiti
- 🔧 Otomatik hata düzeltme
- 📊 İşlem istatistiklerini gösterme
- 🎲 Rastgele veri oluşturma
- 🖱️ Etkileşimli arayüz: bitlere tıklayarak hata ekleyebilme

---

## 🛠️ Kullanılan Teknolojiler

- HTML5 – Sayfa yapısı
- CSS3 – Stil ve tasarım
- JavaScript – Algoritmalar ve dinamik işlemler
- DOM Manipülasyonu – Arayüz güncellemeleri

---

## 📂 Proje Yapısı

📁 hamming-simulator/
├── index.html # Arayüz iskeleti
├── style.css # Tasarım stilleri
├── script.js # Tüm mantıksal işlemler
├── README.md # Bu dosya

yaml
Kopyala
Düzenle

---

## 📈 Algoritma Özeti

Hamming kodları, dijital iletişimde veri bütünlüğünü korumak için kullanılır. SEC-DED özelliği sayesinde:

- Tek bitlik hatalar tespit edilip düzeltilebilir
- Çift bitlik hatalar tespit edilebilir (düzeltilemez)
- Syndrome değeri, hatanın konumunu belirler
- Eklenen parity bitleri ile veri güvenliği sağlanır

Bu uygulamada parity bitleri, kullanıcı verisine göre dinamik olarak eklenir. Syndrome hesaplamaları ve düzeltme işlemleri tamamen JavaScript ile yapılmaktadır.

---

## 🎯 Nasıl Kullanılır?

1. Bu repoyu indir veya klonla:
   ```bash
   git clone https://github.com/kullaniciadi/hamming-simulator.git
Klasöre girip index.html dosyasını aç:

bash
Kopyala
Düzenle
cd hamming-simulator
open index.html  # veya çift tıklayarak aç
Tarayıcıda uygulama açılacak ve kullanıma hazır olacaktır.

📌 Geliştirme Fikirleri
🌗 Karanlık tema desteği

📱 Mobil uyumlu responsive tasarım

🧮 Hexadecimal ve ASCII destekli veri gösterimi

🔁 Farklı hata kodlama algoritmalarının (CRC, BCH, Reed-Solomon) entegrasyonu

📤 Dosya yükleme ve veri dışa aktarma

📚 Kaynaklar
Hamming, R. W. “Error detecting and error correcting codes”, Bell Labs, 1950

https://en.wikipedia.org/wiki/Hamming_code

https://www.tutorialspoint.com/hamming-code

👤 Geliştirici Bilgileri
👨‍💻 Hazırlayan: Ad Soyad

🎓 Bölüm: Bilgisayar Mühendisliği

🏫 Üniversite: Örnek Üniversitesi

📧 E-posta: email@example.com

🔗 LinkedIn: https://linkedin.com/in/kullaniciadi
