const menu = [
  {
    name: "Signature ชานมไข่มุกต้นตำหรับ",
    number : 1,
    desc: `เพราะรสชาติและคุณภาพคือเรื่องสำคัญสูงสุดสำหรับเรา
  จึงเป็นจุดเริ่มต้นของการเดินทางสรรหาวัตถุดิบถึงต้นตำหรับที่ไถหนาน ไต้หวัน
  นำมาผสานกับประสบการณ์เฉพาะในแบบฉบับของ EaseUp
  จนได้ชานมคุณภาพอย่างที่เราภูมิใจ`,
    prices: { small: 40, large: 50 },
    menuCss: ["menuItem", "menuItem__signature"],
    detailCss: ["item-detail", "item-detail__signature"]
  },
  {
    name: "FreshYuZu เฟรชยูสุ",
    number : 2,
    desc: `
    เพื่อจะได้เครื่องดื่มที่มอบความสดชื่นทันทีในดื่มแรก ของเดือนเมษายน
    ทางร้านจึงเลือก ผลไม้ที่ตอบโจทย์ จนไปพบกับความเป็นเอกลักษณ์ของส้มยูสุ 
    ด้วยความหอมอโรม่าของส้ม บวกกับบับเบิ้ลสอดไส้น้ำลิ้นจี่ 
    จึงเป็นอีกแก้วที่พร้อมรับมือกับสงกรานต์ได้เป็นอย่างดี`,
    prices: { small: 60, large: 75 },
    menuCss: ["menuItem", "menuItem__freshYuZu"],
    detailCss: ["item-detail", "item-detail__freshYuZu"]
  },
  {
    name: "Oolong iced tea ชาอู่หลงเย็น",
    number : 3,
    desc: `ชาอู่หลง หรือ ชามังกรดำในภาษาจีน เป็นชากึ่งหมัก 
    ผ่านกระบวนการนวดเล็กน้อย ใช้เวลาไม่มากนัก มีกลิ่นหอม รสชาดชุ่มคอ 
    น้ำชามีสาร tannin ช่วยสลายไขมันในลำไส้ใหญ่ ช่วยทำให้สดชื่น 
    กระตุ้นการทำงานของระบบประสาทและหมุนเวียนโลหิต. 
    EaseUp คัดสรรใบชาคุณภาพจากไต้หวัน เพื่อสัมผัสแห่งอู่หลงที่แท้จริง`,
    prices: { small: 45, large: 55 },
    menuCss: ["menuItem", "menuItem__oolongIcedTea"],
    detailCss: ["item-detail", "item-detail__oolong"]
  },
  {
    name: "Iced Matcha Latte มัทฉะลาเต้",
    number : 4,
    desc: `มัทฉะที่ดี จะมีความขมฝาดน้อย แต่จะคงความเข้มข้นและหอมสดชื่น ของชาเขียวแท้สไตล์ญี่ปุ่น.`,
    prices: { small: 50, large: 60 },
    menuCss: ["menuItem", "menuItem__matchaLatte"],
    detailCss: ["item-detail", "item-detail__matchaLatte"]
  },
  {
    name: "Kuromitsu Milk Tea คุโรมิสึ",
    number : 5,
    desc: `คุโระมิทสึ`,
    prices: { small: 55, large: 65 },
    menuCss: ["menuItem", "menuItem__kuromitsu"],
    detailCss: ["item-detail", "item-detail__kuromitsu"]
  },
  {
    name: "Elegance Matcha เอลลิแกรนซ์มัทฉะ",
    number : 6,
    desc: `ตีมัทฉะสดๆด้วยมือแก้วต่อแก้ว`,
    prices: { small: 60, large: 70 },
    menuCss: ["menuItem", "menuItem__elegantMatcha"],
    detailCss: ["item-detail", "item-detail__elegantMatcha"]
  },
  {
    name: "Dark Choco Milk Tea ดาร์กช็อคโก้",
    number : 7,
    desc: `สัมผัสกับความเข้มข้นเต็มรูปแบบกับ ชานม+ดาร์กช็อคโก้`,
    prices: { small: 50, large: 60 },
    menuCss: ["menuItem", "menuItem__darkChoco"],
    detailCss: ["item-detail", "item-detail__darkChoco"]
  },

];

export default menu