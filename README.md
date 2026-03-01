# 🚨 IoT Safety System (Gas & Flame Detector)xxxxxxxxxxxxxxxxxxxxxxxxxxx

ระบบตรวจจับแก๊สรั่วและเปลวไฟอัจฉริยะ แจ้งเตือนผ่าน LINE และบันทึกข้อมูลผ่าน Web API โดยใช้ NodeMCU (ESP8266)

---

## 📋 Project Title & Description
โปรเจกต์ระบบความปลอดภัยอัจฉริยะที่ออกแบบมาเพื่อเฝ้าระวังเหตุฉุกเฉินภายในอาคาร โดยใช้เซ็นเซอร์ตรวจจับแก๊ส (MQ) และเซ็นเซอร์เปลวไฟ (Flame Sensor) ระบบจะทำการประมวลผลและตอบสนองทันทีเมื่อเกิดเหตุ พร้อมส่งข้อมูลตำแหน่งพิกัด (GPS) ไปยังกลุ่ม LINE ของผู้รับผิดชอบ

---

## ⚙️ Installation Instructions

### วิธีการติดตั้ง (System Requirements)
1. **Hardware:**
   - NodeMCU (ESP8266)
   - จอ OLED SH1106 (I2C)
   - เซ็นเซอร์ตรวจจับแก๊ส (Analog A0)
   - เซ็นเซอร์ตรวจจับเปลวไฟ (Digital D1)
   - GPS Module (Neo-6M)
   - Relay และ Buzzer สำหรับการแจ้งเตือนทางกายภาพ

2. **Dependency ที่ต้องใช้ (Libraries):**
   - `ESP8266WiFi` & `ESP8266HTTPClient`
   - `TinyGPS++`
   - `SoftwareSerial`
   - `U8g2lib` (สำหรับจอ OLED)

3. **Configuration ต่างๆ:**
   - แก้ไข `ssid` และ `password` ในโค้ดให้ตรงกับ WiFi ที่ใช้งาน
   - แก้ไข `accessToken` และ `targetID` สำหรับการส่ง LINE Push Message
   - ตรวจสอบ URL ของ API ในส่วนของ `gasApiUrl`, `flameApiUrl` และ `gpsApiUrl`

---

## 🚀 Usage

### วิธีการใช้งาน Project
1. ทำการเชื่อมต่ออุปกรณ์ตามตาราง Pin Mapping
2. จ่ายไฟให้กับบอร์ด NodeMCU ระบบจะทำการเชื่อมต่อ WiFi และแสดงผล "System Starting..." บนหน้าจอ
3. เมื่อระบบพร้อม หน้าจอจะแสดงค่า **Gas Level** และ **Fire Status** แบบ Real-time
4. หากค่าแก๊สเกิน 500 PPM หรือพบเปลวไฟ:
   - บัสเซอร์จะดัง (Buzzer On)
   - รีเลย์จะทำงาน (Relay Active)
   - ระบบจะส่งข้อความแจ้งเตือนพร้อมลิงก์ Google Maps เข้า LINE ทันที

### ตัวอย่าง Code (API Payload)
```json
{
  "gas_val": 540,
  "gas_state": "DANGER",
  "flame_status": "FIRE DETECTED",
  "Lat": 7.870490,
  "Long": 98.392528
}


🛠 Feature
Dual-Sensor Detection: ตรวจจับได้ทั้งควัน/แก๊ส และเปลวไฟ

Visual Dashboard: หน้าจอ OLED แสดงสถานะชัดเจน พร้อมระบบ Highlight เมื่อเกิดเหตุ

LINE Push Notification: แจ้งเตือนเหตุฉุกเฉินเข้ามือถือทันที (ไม่ใช่แค่ Line Notify ทั่วไป)

Hybrid GPS: ระบบพิกัดอัจฉริยะ ใช้พิกัดจริงจากดาวเทียม และมีพิกัดสำรอง (Fallback) หากอยู่ในที่อับสัญญาณ

Cloud Integration: ส่งข้อมูลสถานะไปยัง Vercel API ทุกๆ 30 วินาที หรือเมื่อมีการเปลี่ยนแปลงของสถานะ


🤝 Credit and Acknowledgements
Development: พัฒนาด้วย Arduino IDE และภาษา C++

Platform: NodeMCU ESP8266

Service: LINE Messaging API และ Vercel Serverless Functions


📞 Contact Information
หากต้องการสอบถามข้อมูลเพิ่มเติมหรือแจ้งปัญหาการใช้งาน:

Developer: [Natthakit Jarnuppakara]
Developer: [Panuvong Tonthong]

GitHub: [https://github.com/Nattakit-pkvc/TestGitHW]