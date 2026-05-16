import { useState, useEffect } from "react";
import heroImg from "./assets/joseph.jpg";
import heroImg5 from "./assets/xaisombun.jpeg";
import heroImg2 from "./assets/img_3800z.jpg";
import translations from "./translations";
import heroImg4 from "./assets/jone.jpg";
import heroImg3 from "./assets/yoyo.jpg";
import heroImg6 from "./assets/zoo.jpg";
import "./App.css";

function App() {
  const [lang, setLang] = useState("english");
  const [showBtn, setShowBtn] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480); // ✅ ເພີ່ມ

  useEffect(() => {
    // ✅ ຕິດຕາມຂະໜາດໜ້າຈໍ
    const handleResize = () => setIsMobile(window.innerWidth < 480);
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowBtn(false);
        setShowMenu(false);
      } else {
        setShowBtn(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* ປຸ່ມພາສາ */}
      <div style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        zIndex: 100,
        opacity: showBtn ? 1 : 0,
        transition: "opacity 0.3s ease",
        pointerEvents: showBtn ? "auto" : "none",
      }}>
        <button
          onClick={() => setShowMenu(!showMenu)}
          style={{
            padding: isMobile ? "8px 14px" : "10px 20px",
            borderRadius: "8px", border: "none",
            cursor: "pointer", backgroundColor: "#4f46e5",
            color: "#fff", fontSize: isMobile ? "12px" : "14px",
            fontWeight: "bold",
          }}
        >
          🌐 {translations[lang].language}
        </button>

        {showMenu && (
          <div style={{
            display: "flex", flexDirection: "column", gap: "6px",
            marginTop: "6px", backgroundColor: "#fff",
            borderRadius: "8px", padding: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}>
            {Object.keys(translations).map((key) => (
              <button key={key}
                onClick={() => { setLang(key); setShowMenu(false); }}
                style={{
                  padding: "8px 16px", borderRadius: "8px",
                  border: "none", cursor: "pointer",
                  backgroundColor: lang === key ? "#4f46e5" : "#f3f4f6",
                  color: lang === key ? "#fff" : "#333",
                  fontWeight: lang === key ? "bold" : "normal",
                  fontSize: isMobile ? "12px" : "14px",
                  textAlign: "left",
                }}
              >
                {translations[key].language}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div style={{
        display: "flex", flexDirection: "column",
        alignItems: "center",
        padding: isMobile ? "20px 16px 40px" : "40px 20px",
        gap: "16px",
        maxWidth: "600px",
        margin: "0 auto",
      }}>

        {/* ຮູບໂປຣໄຟລ໌ */}
        <img src={heroImg} alt="joseph" style={{
          width: isMobile ? "140px" : "200px",
          height: isMobile ? "140px" : "200px",
          borderRadius: "50%", objectFit: "cover",
        }}/>

        {/* ຊື່ */}
        <h1 style={{
          fontSize: isMobile ? "22px" : "30px",
          fontWeight: "bold", margin: 0, color: "#1a1a2e",
          textAlign: "center",
        }}>
          {translations[lang].name}
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px", textAlign: "center" }}>
          <p style={{ color: "gray", fontStyle: "italic", margin: 0, fontSize: isMobile ? "12px" : "14px" }}>
            {translations[lang].bible}
          </p>
          <p style={{ color: "gray", fontStyle: "italic", margin: 0, fontSize: isMobile ? "12px" : "14px" }}>
            {translations[lang].bible2}
          </p>
        </div>

        {/* bio */}
        <p style={{
          fontSize: isMobile ? "14px" : "16px",
          textAlign: "center", maxWidth: "450px",
          color: "#000", whiteSpace: "pre-line",
          margin: 0, lineHeight: "1.6",
        }}>
          {translations[lang].bio}
        </p>

        {/* ຮູບໃຫຍ່ */}
        <img src={heroImg2} alt="Xaisombun" style={{
          width: "100%",
          height: isMobile ? "300px" : "600px",  // ✅ ນ້ອຍລົງໃນມືຖື
          objectFit: "cover", borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}/>

        <p style={{ fontSize: isMobile ? "20px" : "25px", fontWeight: "bold", margin: 0, color: "#1a1a2e", textAlign: "center" }}>
          {translations[lang].Prayer}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px", textAlign: "center", fontSize: isMobile ? "14px" : "16px", color: "#000" }}>
          <p style={{ margin: 0 }}>{translations[lang].prayerPoints1}</p>
          <p style={{ margin: 0 }}>{translations[lang].prayerPoints2}</p>
          <p style={{ margin: 0 }}>{translations[lang].prayerPoints3}</p>
          <p style={{ margin: 0 }}>{translations[lang].prayerPoints4}</p>
          <p style={{ margin: 0 }}>{translations[lang].prayerPoints5}</p>
        </div>

        <img src={heroImg4} alt="Joseph1" style={{
          width: "100%",
          height: isMobile ? "200px" : "300px",
          objectFit: "cover", borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}/>

        <p style={{
          color: "black", whiteSpace: "pre-line",
          margin: "0 auto", lineHeight: "1.6",
          fontSize: isMobile ? "14px" : "16px", textAlign: "center",
        }}>
          {translations[lang].Description}
        </p>

        <img src={heroImg3} alt="Joseph4" style={{
          width: "100%",
          height: isMobile ? "250px" : "400px",
          objectFit: "cover", borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}/>

        {/* 2 ຮູບຄຽງກັນ */}
        <div style={{ display: "flex", flexDirection: "row", gap: "10px", width: "100%" }}>
          <img src={heroImg5} alt="xaisombun" style={{
            width: "50%",
            height: isMobile ? "200px" : "400px",
            objectFit: "cover", borderRadius: "15px",
          }}/>
          <img src={heroImg6} alt="z" style={{
            width: "50%",
            height: isMobile ? "200px" : "400px",
            objectFit: "cover", borderRadius: "15px",
          }}/>
        </div>

        <hr style={{ width: "100%", border: "1.5px solid #a1a1a1", marginTop: "20px" }}/>

        {/* Contact Box */}
        <div style={{
          width: "100%", minHeight: "200px",
          backgroundColor: "#80808061", borderRadius: "14px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          padding: isMobile ? "20px" : "30px 50px",  // ✅ ນ້ອຍລົງໃນມືຖື
        }}>
          <div style={{ display: "flex", flexDirection: "row", gap: "8px", alignItems: "center", flexWrap: "wrap" }}>
            <p style={{ color: "#000", fontStyle: "italic", margin: 0, fontSize: isMobile ? "13px" : "15px" }}>
              {translations[lang].contact}
            </p>
            <h5 style={{ margin: 0, fontSize: isMobile ? "12px" : "14px" }}>
              phanthakone@gmail.com
            </h5>
          </div>

          <div style={{
            fontSize: isMobile ? "13px" : "15px",
            paddingTop: "20px", display: "flex",
            flexDirection: isMobile ? "column" : "row",  // ✅ ມືຖືລຽງລວງຕັ້ງ
            gap: "8px", fontStyle: "italic", flexWrap: "wrap",
          }}>
            {translations[lang].suport}
            <h5 style={{ margin: 0, color: "red", fontSize: isMobile ? "12px" : "14px" }}>
              Kip 1010-xxxx-xxxx-xxxx USD 1012-xxxx-xxxx-xxxx
            </h5>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;