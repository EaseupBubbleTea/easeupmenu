const menu = [
  {
    name: 'Signature ชานมไข่มุกต้นตำหรับ',
    number: 1,
    desc: `เพราะรสชาติและคุณภาพคือเรื่องสำคัญสูงสุดสำหรับเรา
  จึงเป็นจุดเริ่มต้นของการเดินทางสรรหาวัตถุดิบถึงต้นตำหรับที่ไถหนาน ไต้หวัน
  นำมาผสานกับประสบการณ์เฉพาะในแบบฉบับของ EaseUp
  จนได้ชานมคุณภาพอย่างที่เราภูมิใจ`,
    prices: { small: 40, large: 50 },
    detailCss: ['item-detail', 'item-detail__signature'],
    srcUrls: {
      small: 'https://i.imgur.com/rfKoGBn.jpg',
      large: 'https://i.imgur.com/dmG3Vrf.jpg'
    }
  }
  ,
  {
    name: "FreshYuZu เฟรชยูสุ",
    number : 2,
    desc: `
    เพื่อจะได้เครื่องดื่มที่มอบความสดชื่นทันทีในดื่มแรก ของเดือนเมษายน
    ทางร้านจึงเลือก ผลไม้ที่ตอบโจทย์ จนไปพบกับความเป็นเอกลักษณ์ของส้มยูสุ
    ด้วยความหอมอโรม่าของส้ม บวกกับบับเบิ้ลสอดไส้น้ำลิ้นจี่
    จึงเป็นอีกแก้วที่พร้อมรับมือกับสงกรานต์ได้เป็นอย่างดี`,
    prices: { small: 60, large: 75 },
    // menuCss: ["menuItem", "menuItem__freshYuZu"],
    detailCss: ["item-detail", "item-detail__freshYuZu"],
        srcUrls: {
      small: 'https://i.imgur.com/axd8bpF.jpg',
      large: 'https://i.imgur.com/tSWxMD3.jpg'
    }
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
    // menuCss: ["menuItem", "menuItem__oolongIcedTea"],
    detailCss: ["item-detail", "item-detail__oolong"],
        srcUrls: {
      small: 'https://i.imgur.com/rGmv4YW.jpg',
      large: 'https://i.imgur.com/EZDWjT1.jpg'
    }
  },
  {
    name: "Iced Matcha Latte มัทฉะลาเต้",
    number : 4,
    desc: `มัทฉะที่ดี จะมีความขมฝาดน้อย แต่จะคงความเข้มข้นและหอมสดชื่นของชาเขียวแท้สไตล์ญี่ปุ่น.`,
    prices: { small: 50, large: 60 },
    // menuCss: ["menuItem", "menuItem__matchaLatte"],
    detailCss: ["item-detail", "item-detail__matchaLatte"],
        srcUrls: {
      small: 'https://i.imgur.com/IeosYnL.jpg',
      large: 'https://i.imgur.com/unXQ2Tf.jpg'
    }
  },
  {
    name: "Kuromitsu Milk Tea คุโรมิสึ",
    number : 5,
    desc: `หรือ น้ำผึ้งดำ ทำมาจากน้ำตาลอ้อยแห่งเกาะโอกินาว่า ญี่ปุ่น โดยการเคี่ยวน้ำตาลกับน้ำจนงวด`,
    prices: { small: 55, large: 65 },
    // menuCss: ["menuItem", "menuItem__kuromitsu"],
    detailCss: ["item-detail", "item-detail__kuromitsu"],
        srcUrls: {
      small: 'https://i.imgur.com/qE7q199.jpg',
      large: 'https://i.imgur.com/lQjISoJ.jpg'
    }
  },
  {
    name: "Elegance Matcha เอลลิแกรนซ์มัทฉะ",
    number : 6,
    desc: `มัทฉะแท้ ตีกับนมโคสดด้วยมือแบบแก้วต่อแก้วสุดเข้มข้น ราดลงไปบนนมโคสดอย่างดี.`,
    prices: { small: 60, large: 70 },
    // menuCss: ["menuItem", "menuItem__elegantMatcha"],
    detailCss: ["item-detail", "item-detail__elegantMatcha"],
        srcUrls: {
      small: 'https://i.imgur.com/pcSrEzl.jpg',
      large: 'https://i.imgur.com/0ZBA0wM.jpg'
    }
  },
  {
    name: "Dark Choco Milk Tea ดาร์กช็อคโก้",
    number : 7,
    desc: `สัมผัสกับความเข้มข้นเต็มรูปแบบกับ กับช็อคโกแลตแท้ถึง 3 ชนิด`,
    prices: { small: 50, large: 60 },
    // menuCss: ["menuItem", "menuItem__darkChoco"],
    detailCss: ["item-detail", "item-detail__darkChoco"],
        srcUrls: {
      small: 'https://i.imgur.com/S51QXw2.jpg',
      large: 'https://i.imgur.com/Kcryt9f.jpg'
    }
  },
  {
    name: "Peach Tea พีชไอซ์ที",
    number : 8,
    desc: `(ไม่มีคาเฟอีน) ลูกพีชคุณประโยชน์มากมาย มีทั้งวิตามินเอที่ช่วยบำรุงสายตา
     มีวิตามินซีป้องกันโรคหวัด และโรคเลือดออกตามไรฟัน
     ให้แร่ธาตุแคลเซียมและฟอสฟอรัสช่วยเสริมสร้างกระดูกและฟัน
     ทั้งยังแก้โรคหอบหืด หล่อลื่นลำไส้`,
    prices: { small: 60, large: 70 },
    // menuCss: ["menuItem", "menuItem__peachTea"],
    detailCss: ["item-detail", "item-detail__peachTea"],
        srcUrls: {
      small: 'https://i.imgur.com/rVPDCwD.jpg',
      large: 'https://i.imgur.com/fNAaN95.jpg'
    }
  },
  {
    name: "Oolong Peach Tea อู่หลงพีชไอซ์ที",
    number : 9,
    desc: `ด้วยความหอมของลูกพีช
    บวกกับความหอมสดชื่นของชาอู่หลงก้านอ่อนอบผสมดอกหอมหมื่นลี้จากประเทศไต้หวัน
    ทำให้ความรู้สึกผ่อนคลายเหมือนได้พักผ่อนกลางธรรมชาติ`,
    prices: { small: 60, large: 70 },
    // menuCss: ["menuItem", "menuItem__oolongPeace"],
    detailCss: ["item-detail", "item-detail__oolongPeace"],
        srcUrls: {
      small: 'https://i.imgur.com/E0fEF9y.jpg',
      large: 'https://i.imgur.com/YPr9adR.jpg'
    }
  },
  {
    name: "Strawberry Lime Soda สตรอว์เบอร์รี ไลม์ โซดา",
    number : 10,
    desc: `เนื้อสตรอว์เบอร์รีสด ผสมกับซอสไซรัปสตรอว์เบอร์รีสูตรพิเศษ
    เวลาดื่มได้ความสดชื่นของน้ำและได้สัมผัสถึงเนื้อสตรอว์เบอร์รีแท้ๆ`,
    prices: { small: 50, large: 60 },
    // menuCss: ["menuItem", "menuItem__strawberryLimeSoda"],
    detailCss: ["item-detail", "item-detail__strawberryLimeSoda"],
        srcUrls: {
      small: 'https://i.imgur.com/xX2ExHm.jpg',
      large: 'https://i.imgur.com/M2XjANU.jpg'
    }
  },
  {
    name: "Milo Magma ไมโลแมกม่า",
    number : 11,
    desc: `ซอสช็อคโกแลตบัตเตอร์เข้มข้น  ราดลงบนไมโลหอมๆ เข้ากันอย่างลงตัว สำหรับคนที่คลั่งไคล้ช้อคโกแลต ไม่ควรพลาด`,
    prices: { small: 50, large: 60 },
    // menuCss: ["menuItem", "menuItem__miloMagma"],
    detailCss: ["item-detail", "item-detail__miloMagma"],
        srcUrls: {
      small: 'https://i.imgur.com/LgYDMm3.jpg',
      large: 'https://i.imgur.com/FI1qvhK.jpg'
    }
  },
];

export default menu;
