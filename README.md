# 🧠 Hamming SEC-DED Code Simulator

Hamming SEC-DED (Single Error Correction, Double Error Detection) algoritmasını kullanan bu interaktif web uygulaması, dijital veri iletiminde oluşabilecek hataları tespit edip düzeltmeyi amaçlar. Eğitim ve görselleştirme odaklı olarak geliştirilmiştir.

---

## 🚀 Özellikler

- ✅ Hamming SEC-DED algoritması ile kodlama
- 💡 Parity bit hesaplama & görsel gösterim
- 🧪 Tek veya çift bitlik hata ekleme
- 🔍 Syndrome hesaplama ve hata tespiti
- 🔧 Otomatik hata düzeltme
- 📊 İstatistik paneli (oluşan & düzeltilen hata sayısı)
- 🎲 Rastgele veri üretme
- 🖱️ Bit tıklaması ile hata simülasyonu

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji   | Açıklama                            |
|-------------|-------------------------------------|
| HTML5       | Uygulama arayüzünün iskeleti        |
| CSS3        | Stil ve renk teması                 |
| JavaScript  | Algoritmalar ve etkileşim mantığı   |
| DOM API     | Gerçek zamanlı görsel güncellemeler |

---

## 📂 Uygulama Yapısı

Proje tek sayfalık bir web uygulamasıdır (SPA). Üç temel dosyadan oluşur:

hamming-simulator/
├── index.html → Sayfa yapısı ve HTML içerik
├── style.css → Tüm stil tanımlamaları
├── script.js → Kodlama, hata tespiti ve JS mantığı
└── README.md → Proje dokümantasyonu

yaml
Kopyala
Düzenle

Dosya yapısı basit, okunabilir ve kolay özelleştirilebilir olacak şekilde düzenlenmiştir.

---

## 📈 Hamming SEC-DED Algoritması

Hamming kodu, veri iletiminde 1-bit’lik hataları düzeltme, 2-bit’lik hataları tespit etme amacıyla kullanılan bir hata düzeltme algoritmasıdır.

- Parity bitleri, 2’nin kuvveti pozisyonlarına eklenir
- Syndrome hesaplaması ile hata konumu bulunur
- SEC-DED (Single Error Correction – Double Error Detection) desteklenir
- Uygulama, kullanıcıdan alınan bit dizisine bu algoritmayı uygular

---

## 💡 Uygulamanın Akışı

1. Kullanıcı bit dizisi girer veya rastgele oluşturur
2. Hamming kodlama yapılır, parity bitleri hesaplanır
3. Kullanıcı tek / çift bitlik hata simülasyonu yapabilir
4. Uygulama hatayı tespit eder ve düzeltir
5. Görsel olarak her adım kullanıcıya sunulur

---

## 🧪 Örnek Kullanım

1. Projeyi indir veya klonla:

```bash
git clone https://github.com/kullaniciadi/hamming-simulator.git
Klasöre girip HTML dosyasını aç:

bash
Kopyala
Düzenle
cd hamming-simulator
start index.html     # Windows
open index.html      # macOS
Uygulama tarayıcınızda açılır ve hemen kullanılabilir.

📌 Geliştirme Önerileri
🌗 Tema desteği (karanlık / açık mod)

📱 Mobil uyumlu responsive tasarım

🔁 CRC ve Reed-Solomon gibi alternatif algoritmalar

🧮 Hexadecimal & ASCII veri gösterimi

📤 Dosya yükleme / dışa aktarım seçenekleri

👨‍💻 Geliştirici Bilgileri
Alan	Bilgi
👤 İsim	Ad Soyad
🏫 Üniversite	Örnek Üniversitesi
🎓 Bölüm	Bilgisayar Mühendisliği
📧 E-posta	email@example.com
🔗 LinkedIn	linkedin.com/in/kullaniciadi
