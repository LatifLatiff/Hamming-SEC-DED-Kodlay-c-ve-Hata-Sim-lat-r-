# 🔧 Hamming SEC-DED Kod Simülatörü

Bu proje, **Hamming (SEC-DED)** kodlama tekniğini interaktif olarak görselleştiren bir web tabanlı simülatördür. Kullanıcıların veri bitlerini girerek bu bitlerin Hamming kodu ile nasıl kodlandığını, olası hataların nasıl eklendiğini, bu hataların nasıl tespit edildiğini ve tek bitlik hataların nasıl düzeltildiğini adım adım görmelerini sağlar.

Bu simülatör, **Single-Error-Correcting, Double-Error-Detecting (SEC-DED)** prensibine dayanır. Bu, bir bitlik hataları düzeltebilen ve iki bitlik hataları tespit edebilen genişletilmiş bir Hamming kodudur.

---

## 🚀 Özellikler

* **Veri Kodlama**: 8, 16 veya 32 bitlik verileri Binary veya Decimal formatta girerek Hamming koduna dönüştürme.
* **Rastgele Veri**: Tek tıkla rastgele veri üreterek hızlıca kodlama yapma.
* **Görsel Arayüz**: Veri bitlerini, parite bitlerini ve genel parite bitini renk kodlarıyla ayırt edilebilir şekilde gösterme.
* **Hata Simülasyonu**:
    * Belirtilen pozisyonda **tek bitlik hata** ekleme.
    * Rastgele pozisyonlarda **çift bitlik hata** ekleme.
* **Hata Tespiti ve Düzeltme**:
    * **Syndrome** değerini hesaplayıp gösterme ve yorumlama.
    * Tek bitlik hataları otomatik olarak tespit etme ve düzeltme.
    * Çift bitlik hataların düzeltilemez olduğunu bildirme.
* **İstatistikler**: Toplam işlem, tespit edilen ve düzeltilen hata sayıları gibi simülasyon istatistiklerini takip etme.
* **Duyarlı Tasarım**: Mobil ve masaüstü cihazlarda sorunsuz çalışan modern bir arayüz.

---

## 🖥️ Ekran Görüntüsü

![Hamming Kod Simülatörü Arayüzü](https://i.imgur.com/your-screenshot-url.png)
*Not: Yukarıdaki ekran görüntüsü temsilidir. Kendi ekran görüntünüzü eklemeyi unutmayın.*

---

## 🛠️ Nasıl Kullanılır?

Bu projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Projeyi Klonlayın veya İndirin:**
    ```bash
    git clone [https://github.com/kullanici-adiniz/proje-repo-adiniz.git](https://github.com/kullanici-adiniz/proje-repo-adiniz.git)
    ```
2.  **Klasöre Gidin:**
    ```bash
    cd proje-repo-adiniz
    ```
3.  **`index.html` Dosyasını Açın:**
    `index.html` dosyasına çift tıklayarak veya bir web tarayıcısı üzerinden açarak simülatörü başlatabilirsiniz. Herhangi bir sunucu kurulumu gerektirmez.

### Simülatör Adımları:

1.  **Veri Boyutunu Seçin**: 8, 16 veya 32 bit seçeneklerinden birini seçin.
2.  **Veriyi Girin**: İkili (binary) veya onluk (decimal) tabanda verinizi girin ve "Kodla" butonuna tıklayın. Alternatif olarak "Rastgele Üret" butonunu kullanabilirsiniz.
3.  **Hata Ekleyin**: Kodlanmış veri üzerinde hata oluşturmak için bir pozisyon girip "Hata Ekle" butonuna tıklayın veya doğrudan "Çift Hata Ekle" butonunu kullanın.
4.  **Tespit ve Düzeltme**: "Hata Tespit Et ve Düzelt" butonuna tıklayarak sonucun nasıl düzeltildiğini veya hatanın türünü görün. "Syndrome Göster" butonu ile hata analizini detaylı inceleyebilirsiniz.

---

## 📂 Proje Yapısı

* `index.html`: Simülatörün ana yapısını ve HTML iskeletini içerir.
* `style.css`: Uygulamanın görsel stilini, renklerini, animasyonlarını ve duyarlı tasarımını yönetir.
* `script.js`: Projenin tüm mantığını içerir:
    * Hamming kodlama (`hammingEncode`)
    * Syndrome hesaplama (`calculateSyndrome`)
    * Hata ekleme ve düzeltme fonksiyonları
    * DOM manipülasyonu ve olay dinleyicileri

---

## 💻 Kullanılan Teknolojiler

* **HTML5**: Web sayfasının yapısal temelini oluşturur.
* **CSS3**: Modern ve duyarlı bir tasarım için kullanılır (Flexbox, Grid, Animasyonlar).
* **JavaScript (ES6+)**: Simülatörün tüm interaktif fonksiyonelliğini sağlar.

---

## 🤝 Katkıda Bulunma

Katkılarınız projeyi daha da geliştirmemize yardımcı olur! Fikirlerinizi, hata bildirimlerinizi veya yeni özellik isteklerinizi "Issues" bölümünden iletebilirsiniz. Pull Request'ler her zaman memnuniyetle karşılanır.

1.  Projeyi Fork'layın.
2.  Yeni bir Feature Branch oluşturun (`git checkout -b feature/yeni-ozellik`).
3.  Değişikliklerinizi Commit'leyin (`git commit -m 'Yeni bir özellik eklendi'`).
4.  Branch'inizi Push'layın (`git push origin feature/yeni-ozellik`).
5.  Bir Pull Request açın.

---

