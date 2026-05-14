import { useState, useEffect } from "react";
import heroImg from "./assets/joseph.jpg";
import heroImg5 from "./assets/xaisombun.jpeg";
import heroImg2 from "./assets/IMG_3800.jpg";
import translations from "./translations";
import heroImg4 from "./assets/jo.jpg";
import heroImg3 from "./assets/carmeraman.jpg";
import heroImg6 from "./assets/z.jpg";
import "./App.css";

function App() {
  const [lang, setLang] = useState("english");
  const [showBtn, setShBtn] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowBtn(false); // ເລື່ອນລົງ → ຫາຍ
      } else {
        setShowBtn(true); // ຢູ່ເທິງ → ສະແດງ
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* ປຸ່ມພາສາ */}
      <div
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          zIndex: 100,
          opacity: showBtn ? 1 : 0,           // ✅ ຊ່ວງຫາຍ
        transition: "opacity 0.3s ease",    // ✅ animation ລຽນ
        pointerEvents: showBtn ? "auto" : "none",  // ✅ ກົດບໍ່ໄດ້ຕອນຫາຍ
        }}
      >
        {Object.keys(translations).map((key) => (
          <button
            key={key}
            onClick={() => setLang(key)}
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor: lang === key ? "#4f46e5" : "#e5e7eb",
              color: lang === key ? "#fff" : "#333",
              fontWeight: lang === key ? "bold" : "normal",
              fontSize: "14px",
              transition: "all 0.2s",
            }}
          >
            {translations[key].language}
          </button>
        ))}
      </div>

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
          gap: "16px",
          maxWidth: "600px", // ✅ ຈຳກັດຄວາມກວ້າງ
          margin: "0 auto", // ✅ ຈັດກາງທັງໝົດ
        }}
      >
        {/* ຮູບໂປຣໄຟລ໌ */}
        <img
          src={heroImg}
          alt="joseph"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #4f46e5",
            marginTop: "20px",
          }}
        />

        {/* ຊື່ */}
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            margin: 0,
            color: "#1a1a2e",
          }}
        >
          {translations[lang].name}
        </h1>
        <p
          style={{
            color: "gray",
            fontStyle: "italic",
            margin: "0 auto",
            fontSize: "14px",
            textAlign: "center",
            maxWidth: "400px",
            lineHeight: "1.4",
          }}
        >
          {translations[lang].bible}
          {translations[lang].bible2}
        </p>
        {/* bio */}
        <p
          style={{
            fontSize: "16px",
            textAlign: "center",
            maxWidth: "450px",
            color: "#000000",
            whiteSpace: "pre-line",
            margin: 0,
            lineHeight: "1.6",
          }}
        >
          {translations[lang].bio}
        </p>
        <img
          src={heroImg2}
          alt="Xaisombun"
          style={{
            width: "90%",
            height: "600px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />
        <p
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            margin: 0,
            color: "#1a1a2e",
          }}
        >
          {translations[lang].Prayer}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            textAlign: "center",
            fontSize: "16px",
            color: "#000000",
          }}
        >
          <p>{translations[lang].prayerPoints1}</p>
          <p>{translations[lang].prayerPoints2}</p>
          <p>{translations[lang].prayerPoints3}</p>
          <p>{translations[lang].prayerPoints4}</p>
          <p>{translations[lang].prayerPoints5}</p>
        </div>

        {/* ຮູບ 2 */}
        <img
          src={heroImg4}
          alt="Joseph1"
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />
        <p
          style={{
            color: "black",
            whiteSpace: "pre-line",
            margin: "0 auto",
            lineHeight: "1.6",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          {translations[lang].Description}
        </p>
        <img
          src={heroImg3}
          alt="Joseph4"
          style={{
            width: "100%",
            height: "400px",
            marginTop: "10px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <img
            src={heroImg5}
            alt="xaisombun"
            style={{
              width: "50%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
          <img
            src={heroImg6}
            alt="z"
            style={{
              width: "50%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "15px",
            }}
          />
        </div>
        {/* ເສັ້ນຂັ້ນ */}
        <hr
          style={{
            width: "100%",
            border: "1.5px solid #a1a1a1",
            marginTop: "20px",
          }}
        />
        <div
          style={{
            width: "100%",
            height: "300px",
            backgroundColor: "#80808061",
            borderRadius: "14px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            paddingTop: "50px",
            paddingLeft: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#000000",
                fontStyle: "italic",
                marginBottom: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                textAlign: "left",
                margin: 0,
                fontSize: "15px",
              }}
            >
              {translations[lang].contact}
            </p>
            <h5 style={{ textAlign: "left", margin: 0 }}>
              phanthakone@gmail.com
            </h5>
          </div>
          <div
            style={{
              fontSize: "15px",
              marginTop: "50px",
              display: "flex",
              flexDirection: "row",
              margin: 0,
              gap: "50px",
              fontStyle: "italic",
            }}
          >
            {translations[lang].suport}
            <h5 style={{ margin: 0, color: "red" }}>
              Kip 1010-xxxx-xxxx-xxxx USD 1012-xxxx-xxxx-xxxx
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
