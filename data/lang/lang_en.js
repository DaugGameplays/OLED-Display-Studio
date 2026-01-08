window.LANG_EN = {

    // =========================
    // STATIC TEXTS
    // =========================
    main_grid: "OLED Display (128x32)",
    desc_grid: "Choose the Grid:",
    titel_templates: "Templates",
    disc_templetes: "Filter:",
    titel_preview: "1:1 Preview",
    info_content: "Choose an element...",
    titel_export: "Export & Configuration",
    titel_output: "Output format:",
    txt_datavolue: "Code size:",
    titel_import: "Import Hex, Binary [Array]",
    txt_importTip: "Input (CTRL + V):",
	alert_Import: "Incorrect format, please check if the icon name (Icon8x8) is also set.",

    // =========================
    // CHECKBOX TOOLTIP TITLES
    // =========================
    chk_grid_8_title: "Toggle 8x8 grid",
    chk_grid_16_title: "Toggle 16x16 grid",
    chk_grid_32_title: "Toggle 32x32 grid",

    chk_filt_8_title: "Filter templates by 8x8",
    chk_filt_16_title: "Filter templates by 16x16",
    chk_filt_32_title: "Filter templates by 32x32",

    // =========================
    // INPUT / TEXTAREA TOOLTIP TITLES
    // =========================
    output_code_title: "Generated output code",
    imp_universal_title: "Paste your hex or binary array here",
    code_format_title: "Choose output format",
    char_on_title: "Character for ON pixels",
    char_off_title: "Character for OFF pixels",

    // =========================
    // BUTTON TITLES
    // =========================
    m_shiftup: "Move UP",
    m_shiftdown: "Move DOWN",
    m_shiftleft: "Move LEFT",
    m_shiftright: "Move RIGHT",
    m_invert: "Invert all",
    m_clear: "Clear grid",
    m_code: "Generate code",
    btn_clr_code: "Clear output",
    btn_copy_code: "Copy to clipboard",
    btn_clear_import: "Clear input",
    btn_imp_import: "Import",
	t_btn_load: "Get the Temp in to the Workshop",
	t_btn_stamp: "Make a Stamp",

    // =========================
    // SELECT OPTIONS
    // =========================
    code_format: {
        adafruit_gfx: "Adafruit GFX (Hex Array)",
        cpp_binary: "C++ Binary (0b0010...)",
        ssd1306_native: "Native Hardware (Vertical)",
        visual_art: "ASCII View"
    },

    // =========================
    // PANEL TOOLTIP DESCRIPTIONS
    // =========================
    panel_main_desc: "Draw directly on the 128x32 display grid",
    panel_workshop_desc: "Create, edit and transform icons",
    panel_templates_desc: "Choose from predefined templates",
    panel_info_desc: "Shows a 1:1 preview and element information",
    panel_export_desc: "Choose output format and export options",

    // =========================
    // ACTION TOOLTIP SYSTEM
    // =========================
    tooltips: {
        tooptip_clr:       { t: "Tipps & Tricks", d: "Use the mouse pointer to get more information about the functions." },
		shift_up:       { t: "Move Up", d: "Shift all pixels upward" },
        shift_down:     { t: "Move Down", d: "Shift all pixels downward" },
        shift_left:     { t: "Move Left", d: "Shift all pixels left" },
        shift_right:    { t: "Move Right", d: "Shift all pixels right" },
        invert:         { t: "Invert", d: "Invert all pixels" },
        mirror_h:       { t: "Mirror H", d: "Flip horizontally" },
        mirror_v:       { t: "Mirror V", d: "Flip vertically" },
        rotate:         { t: "Rotate", d: "Rotate 90° clockwise" },
        scale:          { t: "Scale", d: "Double the size" },
        stamp:          { t: "Stamp", d: "Stamp mode" },
        clear:          { t: "Clear", d: "Clear the grid" },
        code:           { t: "Code", d: "Generate code" },
        clr_code:       { t: "Clear", d: "Clear output field" },
        clr_import:     { t: "Clear", d: "Clear import field" },
        import_universal:{ t: "Import", d: "Import data into grid" },
		ws_g8:      { t: "8×8 icon",        d: "Small square icon" },
		ws_g16:     { t: "16×16 icon",      d: "Medium square icon" },
		ws_g32:     { t: "32×32 icon",      d: "Large square icon" },
		ws_g8x16:   { t: "8×16 icon",       d: "Tall vertical icon" },
		ws_g16x8:   { t: "16×8 icon",       d: "Wide horizontal icon" },
		errWork:   { t: "System Error",       d: "No Workshop found" }
    }
};
