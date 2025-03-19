"use client";
import React, { useState } from "react";

export const TemplatePage = () => {
  const [content, setContent] = useState({
    title: "1.หุ้นต่างประเทศและ ETFs",
    titleColor: "#000000",
    subtitle:
      "ไม่พลาดจังหวะลงทุน ยืดหยุ่นทุกสภาวะตลาด พร้อมคลังบทวิเคราะห์ที่ครอบคลุม",
    subtitleColor: "#166534",
    card1Title: "ซื้อ-ขายครอบคลุมหุ้นทั่วโลก",
    card1TitleColor: "#000000",
    card1ImageUrl:
      "https://uatwww.kasikornsecurities.com/ks_product/api/images/assets/global-invest-assets/KS%20Global%20Invest%20-%20Assets/icon-green-globe.png?_t=1741858363",
    card1Desc1: "Worldwide Market Access",
    card1Desc2: "เปิดให้ลงทุนใน",
    card1Desc3: "28 ประเทศ 40 ตลาด",
    card1DescColor: "#4B5563",
    card2Title: "ไม่มีค่าธรรมเนียมการแลกเปลี่ยนสกุลเงิน",
    card2TitleColor: "#000000",
    card2ImageUrl:
      "https://uatwww.kasikornsecurities.com/ks_product/api/images/assets/global-invest-assets/KS%20Global%20Invest%20-%20Assets/icon-green-globe.png?_t=1741858363",
    card2Desc1: "Fee exchange fees",
    card2Desc2: "ซื้อ-ขายสกุลเงิน",
    card2Desc3: "ไม่มีค่าธรรมเนียมและขั้นต่ำ",
    card2DescColor: "#4B5563",
  });

  const handleCopy = () => {
    const htmlContent = `
<div class="container_px">
   <div style="display: flex; flex-direction: column;">
     <br>
      <div style="font-size: 1.5rem; font-weight: bold; color: ${content.titleColor};"><br></div>
      <div style="font-size: 28px; font-weight: bold; color: ${content.titleColor};">${content.title}</div>
      <p style="font-size: 24px; color: ${content.subtitleColor};">${content.subtitle}</p>
      <br>
      <div class="center">
         <div class="card-container">
            <div style="display: flex; flex-direction: column; max-width: 400px; align-items: center; justify-content: center;">
               <div style="font-size: 24px; font-weight: bold; text-align: center; color: ${content.card1TitleColor};">${content.card1Title}</div>
               <div style="font-size: 24px; font-weight: bold; text-align: center; color: ${content.card1TitleColor};"><br></div>
               <img src="${content.card1ImageUrl}" style="width: 100px;height: 100px;">
               <br>
               <div class="text-description" style="text-align: center;color: ${content.card1DescColor};">
                  <p>${content.card1Desc1}</p>
                  <div style="margin-top:8px;">${content.card1Desc2}</div>
                  <div>${content.card1Desc3}</div>
               </div>
            </div>
            <div style="display: flex; flex-direction: column; max-width: 400px; align-items: center; justify-content: center;">
               <div style="font-size: 24px; font-weight: bold; text-align: center; color: ${content.card2TitleColor};">${content.card2Title}</div>
               <div style="font-size: 24px; font-weight: bold; text-align: center; color: ${content.card2TitleColor};"><br></div>
               <img src="${content.card2ImageUrl}" style="width: 100px;height:100px;">
               <br>
               <div class="text-description" style="text-align: center;color: ${content.card2DescColor};">
                  <p>${content.card2Desc1}</p>
                  <div style="margin-top:8px;">${content.card2Desc2}</div>
                  <div>${content.card2Desc3}</div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>`;
    navigator.clipboard.writeText(htmlContent);
    alert("Copied to clipboard!");
  };

  return (
    <div className="p-4">
      <div className="mb-8">
        <div className="container_px border">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <br />
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: content.titleColor,
              }}
            >
              <br />
            </div>
            <div
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: content.titleColor,
              }}
            >
              {content.title}
            </div>
            <p style={{ fontSize: "24px", color: content.subtitleColor }}>
              {content.subtitle}
            </p>
            <br />
            <div className="center">
              <div className="card-container">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "400px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: content.card1TitleColor,
                    }}
                  >
                    {content.card1Title}
                  </div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: content.card1TitleColor,
                    }}
                  >
                    <br />
                  </div>
                  <img
                    src={content.card1ImageUrl}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <br />
                  <div
                    className="text-description"
                    style={{
                      textAlign: "center",
                      color: content.card1DescColor,
                    }}
                  >
                    <p>{content.card1Desc1}</p>
                    <div style={{ marginTop: "8px" }}>{content.card1Desc2}</div>
                    <div>{content.card1Desc3}</div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    maxWidth: "400px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: content.card2TitleColor,
                    }}
                  >
                    {content.card2Title}
                  </div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      textAlign: "center",
                      color: content.card2TitleColor,
                    }}
                  >
                    <br />
                  </div>
                  <img
                    src={content.card2ImageUrl}
                    style={{ width: "100px", height: "100px" }}
                  />
                  <br />
                  <div
                    className="text-description"
                    style={{
                      textAlign: "center",
                      color: content.card2DescColor,
                    }}
                  >
                    <p>{content.card2Desc1}</p>
                    <div style={{ marginTop: "8px" }}>{content.card2Desc2}</div>
                    <div>{content.card2Desc3}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-4">แก้ไขเนื้อหา</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-2">หัวข้อหลัก:</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={content.title}
                onChange={(e) =>
                  setContent({ ...content, title: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="color"
                value={content.titleColor}
                onChange={(e) =>
                  setContent({ ...content, titleColor: e.target.value })
                }
                className="w-14 h-10 p-1 border rounded"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2">คำอธิบาย:</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={content.subtitle}
                onChange={(e) =>
                  setContent({ ...content, subtitle: e.target.value })
                }
                className="w-full p-2 border rounded"
              />
              <input
                type="color"
                value={content.subtitleColor}
                onChange={(e) =>
                  setContent({ ...content, subtitleColor: e.target.value })
                }
                className="w-14 h-10 p-1 border rounded"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold mt-4">การ์ด 1</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={content.card1Title}
                onChange={(e) =>
                  setContent({ ...content, card1Title: e.target.value })
                }
                className="w-full p-2 border rounded mt-2"
                placeholder="หัวข้อการ์ด 1"
              />
              <input
                type="color"
                value={content.card1TitleColor}
                onChange={(e) =>
                  setContent({ ...content, card1TitleColor: e.target.value })
                }
                className="w-14 h-10 p-1 border rounded mt-2"
              />
            </div>
            <input
              type="text"
              value={content.card1ImageUrl}
              onChange={(e) =>
                setContent({ ...content, card1ImageUrl: e.target.value })
              }
              className="w-full p-2 border rounded mt-2"
              placeholder="URL รูปภาพการ์ด 1"
            />
            <div className="mt-2">
              <div className="flex gap-2 items-center mb-2">
                <span>สีข้อความอธิบาย:</span>
                <input
                  type="color"
                  value={content.card1DescColor}
                  onChange={(e) =>
                    setContent({ ...content, card1DescColor: e.target.value })
                  }
                  className="w-14 h-8 p-1 border rounded"
                />
              </div>
              <input
                type="text"
                value={content.card1Desc1}
                onChange={(e) =>
                  setContent({ ...content, card1Desc1: e.target.value })
                }
                className="w-full p-2 border rounded mt-2"
              />
              <input
                type="text"
                value={content.card1Desc2}
                onChange={(e) =>
                  setContent({ ...content, card1Desc2: e.target.value })
                }
                className="w-full p-2 border rounded mt-2"
              />
              <input
                type="text"
                value={content.card1Desc3}
                onChange={(e) =>
                  setContent({ ...content, card1Desc3: e.target.value })
                }
                className="w-full p-2 border rounded mt-2"
              />
            </div>
          </div>
          <div>
            <h3 className="font-bold mt-4">การ์ด 2</h3>
            <div className="flex gap-2">
              <input
                type="text"
                value={content.card2Title}
                onChange={(e) =>
                  setContent({ ...content, card2Title: e.target.value })
                }
                className="w-full p-2 border rounded mt-2"
                placeholder="หัวข้อการ์ด 2"
              />
              <input
                type="color"
                value={content.card2TitleColor}
                onChange={(e) =>
                  setContent({ ...content, card2TitleColor: e.target.value })
                }
                className="w-14 h-10 p-1 border rounded mt-2"
              />
            </div>
            <input
              type="text"
              value={content.card2ImageUrl}
              onChange={(e) =>
                setContent({ ...content, card2ImageUrl: e.target.value })
              }
              className="w-full p-2 border rounded mt-2"
              placeholder="URL รูปภาพการ์ด 2"
            />
            <div className="mt-2">
              <div className="flex gap-2 items-center mb-2">
                <span>สีข้อความอธิบาย:</span>
                <input
                  type="color"
                  value={content.card2DescColor}
                  onChange={(e) =>
                    setContent({ ...content, card2DescColor: e.target.value })
                  }
                  className="w-14 h-8 p-1 border rounded"
                />
              </div>
              <input
                type="text"
                value={content.card2Desc1}
                onChange={(e) =>
                  setContent({ ...content, card2Desc1: e.target.value })
                }
                className="w-full p-2 border rounded mt-2"
              />
              <input
                type="text"
                value={content.card2Desc2}
                onChange={(e) =>
                  setContent({ ...content, card2Desc2: e.target.value })
                }
                className="w-full p-2 border rounded mt-2"
              />
              <input
                type="text"
                value={content.card2Desc3}
                onChange={(e) =>
                  setContent({ ...content, card2Desc3: e.target.value })
                }
                className="w-full p-2 border rounded mt-2"
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleCopy}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Copy HTML
        </button>
      </div>
    </div>
  );
};
