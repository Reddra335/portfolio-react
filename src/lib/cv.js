export function generateCV() {
  return `RENDI DAMARA (REDDRA)
Backend Developer & Hardware Engineer
Bandung, Indonesia

================================================
SUMMARY
================================================
Cross-disciplinary engineer dengan fokus pada backend system
dan embedded/hardware. Berpengalaman membangun REST API
production-grade, fabrikasi digital, dan riset energi terbarukan.

================================================
EXPERIENCE
================================================
• Freelance Backend Developer (2023–sekarang)
  Arsitektur API, desain database, deployment containerized.

• PKL FABLABDG (2023)
  Operator CNC Router & Laser, digital fabrication.

• Founder — Leweung Pixel Tech
  Lab independen: embedded, PCB, riset energi.

• Organizer — Poros Elektro
  Komunitas mahasiswa Teknik Elektro.

================================================
EDUCATION
================================================
• S1 Teknik Elektro — Telkom University (2023–sekarang)
• SMK Doa Bangsa — RPL, Axioo Class Program Batch 6

================================================
SKILLS
================================================
Software : Go, Fiber, Redis, PostgreSQL, Docker, Git, React,
           Vite, JavaScript, C++
Hardware : Autodesk Fusion, Arduino, ESP32, Wokwi, LTspice,
           PCB Design

================================================
CONTACT
================================================
github.com/rendidamara
linkedin.com/in/rendidamara
hackaday.io/rendidamara
`;
}

export function downloadTextFile(filename, content) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
