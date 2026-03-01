// สร้างฟังก์ชัน isPrime ตาม Tip 2
function isPrime(num) {
    // จำนวนเฉพาะต้องมากกว่า 1
    if (num <= 1) {
        return false;
    }

    let i = 2;
    // วนลูปตรวจสอบตัวหาร (ใช้ while ตามโจทย์)
    while (i < num) {
        // Tip 1: เช็คว่าหารลงตัวหรือไม่ (% คือ modulo หรือการหาเศษ)
        if (num % i === 0) {
            return false; // ถ้าหารลงตัว แปลว่าไม่ใช่จำนวนเฉพาะ
        }
        i++;
    }
    
    return true; // ถ้าหลุดลูปมาได้ แสดงว่าไม่มีเลขไหนหารลงตัวเลย เป็นจำนวนเฉพาะ
}

// --- ส่วนของการทำงานหลัก ---

let currentNum = 2;

// วน loop เลขตั้งแต่ 2 ถึง 20
while (currentNum <= 20) {
    // เรียกใช้ฟังก์ชันเช็คค่า
    if (isPrime(currentNum)) {
        console.log(currentNum); // พิมพ์ค่าออกมาทาง Console
    }
    
    // อย่าลืมเพิ่มค่าตัวแปรเพื่อกัน Infinite Loop
    currentNum++;
}