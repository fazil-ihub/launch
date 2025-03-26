import { useEffect, useRef } from 'react';
import launchImage from "../assets/launch1.jpg";
import appLogo from "../assets/appLogo.svg"; 

export default function LaunchPage() {
  const containerRef = useRef(null);

  const handleLaunch = () => {
    window.location.href = "https://okrion.ai/";
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleLaunch();
    }
  };

  useEffect(() => {
    // Focus the container when component mounts
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        color: "white",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        outline: "none",
      }}
      onClick={handleLaunch}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label="Press Enter to launch OKRion website"
    >
      {/* Enhanced Blurry Gradient Circles */}
      <div style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(90px)",
        zIndex: 0,
        width: "500px",
        height: "500px",
        background: "rgba(8, 171, 147, 0.2)",
        top: "-150px",
        right: "-150px",
        animation: "float 8s ease-in-out infinite",
      }}></div>
      
      <div style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(100px)",
        zIndex: 0,
        width: "600px",
        height: "600px",
        background: "rgba(47, 255, 224, 0.15)",
        bottom: "-200px",
        left: "-200px",
        animation: "float 10s ease-in-out infinite 2s",
      }}></div>
      
      <div style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(80px)",
        zIndex: 0,
        width: "400px",
        height: "400px",
        background: "rgba(8, 171, 147, 0.1)",
        top: "40%",
        left: "15%",
        animation: "float 12s ease-in-out infinite 4s",
      }}></div>

      {/* Logo Image */}
      <img 
        src={appLogo} 
        alt="OKRion Logo" 
        style={{
          width: "200px", 
          marginBottom: "50px",
          zIndex: 1,
          transition: "transform 0.3s ease",
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
      />

      {/* Launch Image */}
      <div style={{
        position: "relative",
        zIndex: 1,
        marginBottom: "40px",
      }}>
        <img 
          src={launchImage} 
          alt="Launch" 
          style={{ 
            width: "300px", 
            cursor: "pointer", 
            transition: "all 0.4s ease", 
            boxShadow: "0 10px 30px rgba(8, 171, 147, 0.3)",
            borderRadius: "15px",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            transform: "perspective(1000px)",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "perspective(1000px) rotateY(10deg) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 15px 40px rgba(8, 171, 147, 0.5)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "perspective(1000px)";
            e.currentTarget.style.boxShadow = "0 10px 30px rgba(8, 171, 147, 0.3)";
          }}
        />
        <div style={{
          position: "absolute",
          bottom: "-10px",
          left: "0",
          right: "0",
          height: "20px",
          background: "radial-gradient(ellipse at center, rgba(8, 171, 147, 0.3) 0%, transparent 70%)",
          filter: "blur(5px)",
          zIndex: -1,
        }}></div>
      </div>

      {/* Call-to-action text */}
      <p style={{
        fontSize: "1.2rem",
        marginBottom: "50px",
        zIndex: 1,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "black",
        fontWeight: "500",
      }}>
        Ready, Set, Launch! OKRion is Here to Transform!🔥✨
      </p>

      {/* Animated dots */}
      <div style={{
        display: "flex",
        gap: "10px",
        marginBottom: "40px",
        zIndex: 1,
      }}>
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: `rgba(${i === 0 ? '8, 171, 147' : i === 1 ? '47, 255, 224' : '8, 171, 147'}, ${i === 1 ? 0.8 : 0.6})`,
              animation: `bounce 1.5s infinite ${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        div[tabindex]:focus {
          box-shadow: 0 0 0 3px rgba(8, 171, 147, 0.5);
        }
      `}</style>
    </div>
  );
}