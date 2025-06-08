// Global değişkenler
        let originalData = [];
        let encodedData = [];
        let currentData = [];
        let errorPositions = new Set();
        let stats = {
            totalOperations: 0,
            detectedErrors: 0,
            correctedErrors: 0,
            doubleErrors: 0
        };

        // Hamming SEC-DED kodlama fonksiyonu
// Verilen veri dizisine Hamming SEC-DED (Single Error Correction, Double Error Detection) algoritması uygular
        function hammingEncode(data) {
            const m = data.length;
            let r = 1;
            while ((1 << r) < m + r + 1) r++;
            
            const totalLength = m + r + 1; // +1 overall parity için
            const encoded = new Array(totalLength).fill(0);
            const parityPositions = [];
            
            // Parity bit pozisyonlarını belirle
            for (let i = 0; i < r; i++) {
                parityPositions.push((1 << i) - 1);
            }
            
            // Veri bitlerini yerleştir
            let dataIndex = 0;
            for (let i = 0; i < totalLength - 1; i++) {
                if (!parityPositions.includes(i)) {
                    encoded[i] = parseInt(data[dataIndex]);
                    dataIndex++;
                }
            }
            
            // Parity bitlerini hesapla
            for (let i = 0; i < r; i++) {
                const parityPos = (1 << i) - 1;
                let parity = 0;
                for (let j = 0; j < totalLength - 1; j++) {
                    if ((j + 1) & (1 << i)) {
                        parity ^= encoded[j];
                    }
                }
                encoded[parityPos] = parity;
            }
            
            // Overall parity hesapla
            let overallParity = 0;
            for (let i = 0; i < totalLength - 1; i++) {
                overallParity ^= encoded[i];
            }
            encoded[totalLength - 1] = overallParity;
            
            return encoded;
        }

        // Syndrome hesaplama
// Mevcut kodlu verideki hatayı tespit etmek için syndrome hesaplaması yapılır
        function calculateSyndrome(data) {
            const length = data.length - 1; // Overall parity hariç
            let r = 1;
            while ((1 << r) < length) r++;
            
            const syndrome = [];
            for (let i = 0; i < r; i++) {
                let parity = 0;
                for (let j = 0; j < length; j++) {
                    if ((j + 1) & (1 << i)) {
                        parity ^= data[j];
                    }
                }
                syndrome.push(parity);
            }
            
            // Overall parity kontrolü
            let overallParity = 0;
            for (let i = 0; i < data.length; i++) {
                overallParity ^= data[i];
            }
            
            return { syndrome, overallParity };
        }

        // Veri kodlama
// Kullanıcıdan alınan veriyi kodlar ve ekranda gösterir
        function encodeData() {
            const dataSize = parseInt(document.getElementById('dataSize').value);
            const input = document.getElementById('dataInput').value.trim();
            
            if (!input) {
                alert('Lütfen veri girin!');
                return;
            }
            
            let binary;
            if (/^[01]+$/.test(input)) {
                binary = input.padStart(dataSize, '0').slice(-dataSize);
            } else {
                const decimal = parseInt(input);
                if (isNaN(decimal)) {
                    alert('Geçersiz veri formatı!');
                    return;
                }
                binary = decimal.toString(2).padStart(dataSize, '0').slice(-dataSize);
            }
            
            originalData = binary.split('').map(bit => parseInt(bit));
            encodedData = hammingEncode(originalData);
            currentData = [...encodedData];
            errorPositions.clear();
            
            displayBits('encodedBits', encodedData, 'encoded');
            document.getElementById('encodedResult').style.display = 'block';
            document.getElementById('encodedResult').classList.add('fade-in');
            
            stats.totalOperations++;
            updateStats();
        }

        // Rastgele veri üretme
// Rastgele veri oluşturup kodlama işlemi yapar
        function generateRandom() {
            const dataSize = parseInt(document.getElementById('dataSize').value);
            const randomValue = Math.floor(Math.random() * (1 << dataSize));
            document.getElementById('dataInput').value = randomValue;
            encodeData();
        }

        // Bit görüntüleme
// Verilen bit dizisini HTML üzerinde gösterir (veri, parity, vs.)
        function displayBits(containerId, bits, type) {
            const container = document.getElementById(containerId);
            container.innerHTML = '';
            
            const dataSize = originalData.length;
            let r = 1;
            while ((1 << r) < dataSize + r + 1) r++;
            
            const parityPositions = [];
            for (let i = 0; i < r; i++) {
                parityPositions.push((1 << i) - 1);
            }
            
            bits.forEach((bit, index) => {
                const bitElement = document.createElement('div');
                bitElement.className = 'bit';
                bitElement.textContent = bit;
                bitElement.onclick = () => toggleBit(index);
                
                const label = document.createElement('div');
                label.className = 'bit-label';
                label.textContent = index;
                bitElement.appendChild(label);
                
                if (index === bits.length - 1) {
                    bitElement.classList.add('overall');
                } else if (parityPositions.includes(index)) {
                    bitElement.classList.add('parity');
                } else {
                    bitElement.classList.add('data');
                }
                
                if (errorPositions.has(index)) {
                    bitElement.classList.add('error');
                }
                
                container.appendChild(bitElement);
            });
        }

        // Bit değiştirme
// Belirtilen bitin değerini tersine çevirir (hata simülasyonu için)
        function toggleBit(position) {
            if (currentData.length === 0) return;
            currentData[position] = currentData[position] === 0 ? 1 : 0;
            displayBits('errorBits', currentData, 'error');
        }

        // Tek hata ekleme
// Belirli bir pozisyonda tek bitlik hata oluşturur
        function introduceError() {
            if (encodedData.length === 0) {
                alert('Önce veri kodlayın!');
                return;
            }
            
            const position = parseInt(document.getElementById('errorPosition').value);
            if (isNaN(position) || position < 0 || position >= encodedData.length) {
                alert('Geçersiz pozisyon!');
                return;
            }
            
            currentData = [...encodedData];
            currentData[position] = currentData[position] === 0 ? 1 : 0;
            errorPositions.clear();
            errorPositions.add(position);
            
            displayBits('errorBits', currentData, 'error');
            document.getElementById('errorResult').style.display = 'block';
            document.getElementById('errorResult').classList.add('fade-in');
        }

        // Çift hata ekleme
// İki farklı pozisyonda çift bitlik hata oluşturur
        function introduceDoubleError() {
            if (encodedData.length === 0) {
                alert('Önce veri kodlayın!');
                return;
            }
            
            currentData = [...encodedData];
            const pos1 = Math.floor(Math.random() * encodedData.length);
            let pos2 = Math.floor(Math.random() * encodedData.length);
            while (pos2 === pos1) {
                pos2 = Math.floor(Math.random() * encodedData.length);
            }
            
            currentData[pos1] = currentData[pos1] === 0 ? 1 : 0;
            currentData[pos2] = currentData[pos2] === 0 ? 1 : 0;
            errorPositions.clear();
            errorPositions.add(pos1);
            errorPositions.add(pos2);
            
            displayBits('errorBits', currentData, 'error');
            document.getElementById('errorResult').style.display = 'block';
            document.getElementById('errorResult').classList.add('fade-in');
            
            stats.doubleErrors++;
            updateStats();
        }

        // Hataları temizleme
// Hatalı bitleri temizleyip orijinal duruma döner
        function clearErrors() {
            if (encodedData.length === 0) return;
            currentData = [...encodedData];
            errorPositions.clear();
            displayBits('errorBits', currentData, 'error');
            document.getElementById('errorResult').style.display = 'block';
        }

        // Syndrome gösterme
// Syndrome değerini hesaplayıp kullanıcıya gösterir
        function showSyndrome() {
            if (currentData.length === 0) {
                alert('Önce veri kodlayın ve hata ekleyin!');
                return;
            }
            
            const result = calculateSyndrome(currentData);
            const syndromeValue = result.syndrome.reduce((acc, bit, index) => acc + bit * (1 << index), 0);
            
            document.getElementById('syndromeDisplay').textContent = 
                `Syndrome: ${result.syndrome.reverse().join('')} (${syndromeValue})`;
            
            let interpretation = '';
            if (syndromeValue === 0 && result.overallParity === 0) {
                interpretation = '✅ Hata yok';
            } else if (syndromeValue === 0 && result.overallParity === 1) {
                interpretation = '⚠️ Overall parity bit hatası';
            } else if (syndromeValue !== 0 && result.overallParity === 1) {
                interpretation = `🔧 Tek bit hatası - Pozisyon: ${syndromeValue - 1}`;
            } else {
                interpretation = '❌ Çift bit hatası tespit edildi (düzeltilemez)';
            }
            
            document.getElementById('syndromeInterpretation').innerHTML = 
                `<strong>${interpretation}</strong>`;
            
            document.getElementById('syndromeResult').style.display = 'block';
            document.getElementById('syndromeResult').classList.add('fade-in');
        }

        // Hata tespiti ve düzeltme
// Hataları tespit eder ve düzeltme işlemini yapar
        function detectAndCorrect() {
            if (currentData.length === 0) {
                alert('Önce veri kodlayın!');
                return;
            }
            
            const result = calculateSyndrome(currentData);
            const syndromeValue = result.syndrome.reduce((acc, bit, index) => acc + bit * (1 << index), 0);
            
            let correctedData = [...currentData];
            let status = '';
            
            if (syndromeValue === 0 && result.overallParity === 0) {
                status = '✅ Hata tespit edilmedi';
            } else if (syndromeValue === 0 && result.overallParity === 1) {
                status = '⚠️ Overall parity bit hatası tespit edildi ve düzeltildi';
                correctedData[correctedData.length - 1] = correctedData[correctedData.length - 1] === 0 ? 1 : 0;
                stats.detectedErrors++;
                stats.correctedErrors++;
            } else if (syndromeValue !== 0 && result.overallParity === 1) {
                const errorPos = syndromeValue - 1;
                status = `🔧 Tek bit hatası tespit edildi ve düzeltildi (Pozisyon: ${errorPos})`;
                correctedData[errorPos] = correctedData[errorPos] === 0 ? 1 : 0;
                stats.detectedErrors++;
                stats.correctedErrors++;
            } else {
                status = '❌ Çift bit hatası tespit edildi - Düzeltilemez!';
                document.getElementById('correctionResult').classList.add('error');
                stats.detectedErrors++;
            }
            
            displayBits('correctedBits', correctedData, 'corrected');
            document.getElementById('correctionStatus').innerHTML = `<strong>${status}</strong>`;
            document.getElementById('correctionResult').style.display = 'block';
            document.getElementById('correctionResult').classList.add('fade-in');
            
            updateStats();
        }

        // İstatistikleri güncelleme
// İstatistik sayaçlarını günceller
        function updateStats() {
            document.getElementById('totalOperations').textContent = stats.totalOperations;
            document.getElementById('detectedErrors').textContent = stats.detectedErrors;
            document.getElementById('correctedErrors').textContent = stats.correctedErrors;
            document.getElementById('doubleErrors').textContent = stats.doubleErrors;
        }

        // Sayfa yüklendiğinde
// Sayfa yüklendiğinde varsayılan ayarları uygular
        window.onload = function() {
            updateStats();
        };