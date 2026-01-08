# **🎨 OLED Studio V2.4 – "Advanced Toolset Edition"**

## **🌐 English Version**

### **🚀 Overview**

OLED Studio V2.4 is a professional, web-based toolkit designed for creating bitmaps and icons specifically for **128x32 monochrome OLED displays** (SSD1306). It features a modular architecture, advanced image manipulation tools, and automatic multi-language support.

### **📂 Directory Structure**

The project follows a clean and modular hierarchy:

* Start.html – The main application entry point.  
* credits.html – Developer information and version history.  
* data/ – Core application data:  
  * js/script.js – Main application logic.  
  * lang/ – Language modules (lang\_de.js, lang\_en.js).  
  * pics/ – UI assets, backgrounds, and local FontAwesome integration.  
  * style.css – Application styling.  
  * templates.js – Pre-defined icon library.

### **🛠️ Advanced Features**

* **Automatic Localization:** Detects browser language (DE/EN) on startup.  
* **Workshop Power-Tools:**  
  * **Mirror H/V:** Flip your icons horizontally or vertically.  
  * **Rotate:** Rotate drawings in 90° increments.  
  * **Shift:** Move the entire grid content pixel by pixel (Up/Down/Left/Right).  
* **Offline Ready:** Integrated local fonts and assets prevent browser warnings and allow usage without an internet connection.  
* **Universal Import:** Intelligently parses HEX or BINARY C-arrays to restore graphics into the editor.  
* **Ghost Preview:** Real-time "stamp ghost" follows the cursor for precise placement.

## **🌐 Deutsche Version**

### **🚀 Übersicht**

OLED Studio V2.4 ist ein professionelles, webbasiertes Toolkit zur Erstellung von Bitmaps und Icons speziell für **128x32 Monochrom-OLED-Displays** (SSD1306). Es bietet eine modulare Architektur, erweiterte Werkzeuge zur Bildmanipulation und automatische Mehrsprachigkeit.

### **📂 Ordnerstruktur**

Das Projekt ist in einer sauberen und modularen Hierarchie organisiert:

* Start.html – Der Haupteinstiegspunkt der Anwendung.  
* credits.html – Entwicklerinformationen und Versionshistorie.  
* data/ – Kernverzeichnis der Anwendung:  
  * js/script.js – Hauptlogik der Anwendung.  
  * lang/ – Sprachpakete (lang\_de.js, lang\_en.js).  
  * pics/ – UI-Grafiken, Hintergründe und lokale FontAwesome-Integration.  
  * style.css – Design-Richtlinien der App.  
  * templates.js – Vordefinierte Icon-Bibliothek.

### **🛠️ Erweiterte Funktionen**

* **Automatische Lokalisierung:** Erkennt die Browsersprache (DE/EN) beim Start und lädt die entsprechenden Sprachmodule.  
* **Workshop Power-Tools:**  
  * **Spiegeln H/V:** Icons blitzschnell horizontal oder vertikal spiegeln.  
  * **Rotieren:** Zeichnungen in 90°-Schritten drehen.  
  * **Verschieben (Shift):** Gitterinhalt pixelgenau in alle vier Richtungen bewegen.  
* **Offline-Fähig:** Lokale Schriften und Assets verhindern Browser-Warnungen und ermöglichen die Arbeit ohne Internetverbindung.  
* **Universal Import:** Intelligente Erkennung von HEX- oder BINÄR-C-Arrays zur Wiederherstellung von Grafiken.  
* **Ghost-Vorschau:** Ein Echtzeit-"Stempel-Geist" folgt dem Cursor für präzises Platzieren auf dem Hauptraster.

## **💻 Technical Details**

* **Frontend:** HTML5, CSS3 (Grid/Variables), Vanilla JavaScript (ES6+).  
* **Icons:** FontAwesome (local integration in data/pics/fontawesome).  
* **I18n:** Custom modular translation system with external JS files.

**Version:** 2.4 | **Developed by:** DTech (REC-Snowmen24)