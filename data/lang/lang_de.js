window.LANG_DE = {

    // =========================
    // STATISCHE TEXTE
    // =========================
    main_grid: "OLED Display (128x32)",
    desc_grid: "Raster auswählen:",
    titel_templates: "Vorlagen",
    disc_templetes: "Filter:",
    titel_preview: "1:1 Vorschau",
    info_content: "Wähle ein Element...",
    titel_export: "Export & Konfiguration",
    titel_output: "Ausgabeformat:",
    txt_datavolue: "Codegröße:",
    titel_import: "Hex / Binär Import [Array]",
    txt_importTip: "Eingabe (STRG + V):",
	alert_Import: "Falsches Format, bitte überprüfen ob der Icon Name (Icon8x8) auch gesetzt ist.",

    // =========================
    // CHECKBOX TOOLTIP TITEL
    // =========================
    chk_grid_8_title: "8x8 Raster ein-/ausschalten",
    chk_grid_16_title: "16x16 Raster ein-/ausschalten",
    chk_grid_32_title: "32x32 Raster ein-/ausschalten",

    chk_filt_8_title: "Vorlagen nach 8x8 filtern",
    chk_filt_16_title: "Vorlagen nach 16x16 filtern",
    chk_filt_32_title: "Vorlagen nach 32x32 filtern",

    // =========================
    // INPUT / TEXTAREA TOOLTIP TITEL
    // =========================
    output_code_title: "Generierter Ausgabecode",
    imp_universal_title: "Hex- oder Binärarray hier einfügen",
    code_format_title: "Ausgabeformat wählen",
    char_on_title: "Zeichen für aktive Pixel",
    char_off_title: "Zeichen für inaktive Pixel",

    // =========================
    // BUTTON TITEL
    // =========================
    m_shiftup: "Nach oben verschieben",
    m_shiftdown: "Nach unten verschieben",
    m_shiftleft: "Nach links verschieben",
    m_shiftright: "Nach rechts verschieben",
    m_invert: "Alle Pixel invertieren",
    m_clear: "Raster löschen",
    m_code: "Code generieren",
    btn_clr_code: "Ausgabe löschen",
    btn_copy_code: "In Zwischenablage kopieren",
    btn_clear_import: "Eingabe löschen",
    btn_imp_import: "Importieren",
	t_btn_load: "Lade die Vorlage in den Workshop",
	t_btn_stamp: "Stempel aktivieren",

    // =========================
    // SELECT OPTIONEN
    // =========================
    code_format: {
        adafruit_gfx: "Adafruit GFX (Hex Array)",
        cpp_binary: "C++ Binär (0b0010...)",
        ssd1306_native: "Native Hardware (Vertikal)",
        visual_art: "ASCII Ansicht"
    },

    // =========================
    // PANEL TOOLTIP BESCHREIBUNGEN
    // =========================
    panel_main_desc: "Zeichne direkt auf dem 128x32 Displayraster",
    panel_workshop_desc: "Icons erstellen, bearbeiten und transformieren",
    panel_templates_desc: "Vorlagen auswählen und einfügen",
    panel_info_desc: "Zeigt eine 1:1 Vorschau und Elementinfos",
    panel_export_desc: "Ausgabeformat und Exportoptionen wählen",

    // =========================
    // ACTION TOOLTIP SYSTEM
    // =========================
    tooltips: {
        tooptip_clr:       { t: "Tipps & Tricks", d: "Nutzte den Mauszeiger um mehr Infos zu den Funktionen zu bekommen." },
		shift_up:       { t: "Nach oben", d: "Alle Pixel eine Zeile nach oben verschieben" },
		shift_up:       { t: "Nach oben", d: "Alle Pixel eine Zeile nach oben verschieben" },
        shift_down:     { t: "Nach unten", d: "Alle Pixel eine Zeile nach unten verschieben" },
        shift_left:     { t: "Nach links", d: "Alle Pixel eine Spalte nach links verschieben" },
        shift_right:    { t: "Nach rechts", d: "Alle Pixel eine Spalte nach rechts verschieben" },
        invert:         { t: "Invertieren", d: "Alle Pixel invertieren" },
        mirror_h:       { t: "Horizontal spiegeln", d: "Bild horizontal spiegeln" },
        mirror_v:       { t: "Vertikal spiegeln", d: "Bild vertikal spiegeln" },
        rotate:         { t: "Rotieren", d: "Bild um 90° drehen" },
        scale:          { t: "Skalieren", d: "Bildgröße verdoppeln" },
        stamp:          { t: "Stempelmodus", d: "Stempelwerkzeug aktivieren" },
		stampEmpty:     { t: "System", d: "Kein verwertbarer Inhalt für den Stempel" },
        clear:          { t: "Löschen", d: "Raster vollständig löschen" },
        code:           { t: "Code", d: "Code generieren" },
        clr_code:       { t: "Löschen", d: "Ausgabefeld leeren" },
        clr_import:     { t: "Löschen", d: "Eingabefeld leeren" },
        import_universal:{ t: "Importieren", d: "Daten ins Raster importieren" },
		ws_g8:      { t: "8×8 Icon",        d: "Kleines quadratisches Icon" },
		ws_g16:     { t: "16×16 Icon",      d: "Mittleres quadratisches Icon" },
		ws_g32:     { t: "32×32 Icon",      d: "Großes quadratisches Icon" },
		ws_g8x16:   { t: "8×16 Icon",       d: "Hohes vertikales Icon" },
		ws_g16x8:   { t: "16×8 Icon",       d: "Breites horizontales Icon" },
		errWork:   { t: "System Error",       d: "kein Workshop gefunden" }
    }
};