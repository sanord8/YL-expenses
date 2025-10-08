/**
 * YoungLife Expense Report Generator - Internationalization
 * @description Multi-language support for English, Spanish, and Catalan translations
 * @author Santiago
 * @version 2.2
 * @license MIT
 * @modified 2025-10-08
 */

const translations = {
    en: {
        password_title: "Enter Password",
        password_submit: "Submit",
        password_error: "Incorrect password. Please try again.",

        profile_title: "User Profile",
        full_name: "Full Name",
        area: "Area",
        iban: "IBAN",
        iban_note: "For reimbursement purposes",
        save_profile: "Save Profile",

        app_title: "Expense Report Generator",
        upload_logo: "Upload Logo",

        step_expenses: "Add Expenses",
        step_receipts: "Add Receipts",
        step_generate: "Generate PDF",

        total_expenses: "Total Expenses",
        total_amount: "Total Amount",
        total_receipts: "Total Receipts",

        add_expense: "Add Expense",
        amount: "Amount (€)",
        kilometers: "Kilometers",
        km_rate: "Rate: 0.26€ per km",
        description: "Description",
        reason: "Reason",
        date: "Date",
        add_expense_btn: "Add Expense",
        km_tracking: "Kilometer Tracking",
        add_km: "Add Kilometer Entry",
        km_list: "Kilometer Expenses",
        no_km_expenses: "No kilometer expenses added yet",

        duplicate_last: "Duplicate Last",
        clear_all: "Clear All",
        today: "Today",
        yesterday: "Yesterday",

        export_data: "Export Data",
        import_data: "Import Data",
        data_exported: "Data exported successfully!",
        data_imported: "Data imported successfully!",
        confirm_clear: "Are you sure you want to clear all data? This cannot be undone.",
        no_data_export: "No data to export",

        expenses_list: "Expenses List",
        no_expenses: "No expenses added yet",
        edit: "Edit",
        delete: "Delete",

        upload_receipts: "Upload Receipts",
        receipts_count: "Receipts uploaded:",
        drag_drop: "Drag & drop images here",
        or_click: "or click to select files",
        or_use_buttons: "or use the buttons above",
        select_files: "Upload Files",
        take_photo: "Take Photo",
        camera_title: "Take Photo",
        capture: "Capture",
        retake: "Retake",
        use_photo: "Use Photo",
        camera_error: "Camera access denied or not available",

        generate_pdf: "Generate PDF Report",
        validation_warning: "Warning: You have {expenses} expenses but {receipts} receipts. Continue anyway?",
        pdf_generating: "Generating PDF...",
        pdf_error: "Error generating PDF. Please try again.",

        developed_by: "Developed by",

        total: "Total:",

        // Validation messages
        validation_error: "Validation Error",
        validation_amount: "Please enter a valid amount greater than 0.",
        validation_description: "Please enter a description.",
        validation_reason: "Please enter a reason for this expense.",
        validation_reason_travel: "Please enter a reason for this travel.",
        validation_date: "Please select a date.",
        validation_km: "Please enter valid kilometers greater than 0.",
        validation_profile: "Please complete your profile (Name and Area) before generating a PDF.",
        validation_missing_receipts: "You must upload at least one receipt image before generating the PDF.",
        validation_insufficient_receipts: "You have {expenses} expenses but only {receipts} receipts. Please upload a receipt for each expense.",
        validation_extra_receipts: "You have {receipts} receipts but only {expenses} expenses. Do you want to continue?",
        incomplete_profile: "Incomplete Profile",
        missing_receipts: "Missing Receipts",
        insufficient_receipts: "Insufficient Receipts",
        extra_receipts: "Extra Receipts"
    },
    es: {
        password_title: "Introducir Contraseña",
        password_submit: "Enviar",
        password_error: "Contraseña incorrecta. Inténtalo de nuevo.",

        profile_title: "Perfil de Usuario",
        full_name: "Nombre Completo",
        area: "Área",
        iban: "IBAN",
        iban_note: "Para reembolso",
        save_profile: "Guardar Perfil",

        app_title: "Generador de Informes de Gastos",
        upload_logo: "Subir Logo",

        step_expenses: "Añadir Gastos",
        step_receipts: "Añadir Recibos",
        step_generate: "Generar PDF",

        total_expenses: "Total de Gastos",
        total_amount: "Cantidad Total",
        total_receipts: "Total de Recibos",

        add_expense: "Añadir Gasto",
        amount: "Cantidad (€)",
        kilometers: "Kilómetros",
        km_rate: "Tarifa: 0.26€ por km",
        description: "Descripción",
        reason: "Motivo",
        date: "Fecha",
        add_expense_btn: "Añadir Gasto",
        km_tracking: "Seguimiento de Kilómetros",
        add_km: "Añadir Entrada de Kilómetros",
        km_list: "Gastos de Kilómetros",
        no_km_expenses: "No hay gastos de kilómetros añadidos todavía",

        duplicate_last: "Duplicar Último",
        clear_all: "Borrar Todo",
        today: "Hoy",
        yesterday: "Ayer",

        export_data: "Exportar Datos",
        import_data: "Importar Datos",
        data_exported: "¡Datos exportados correctamente!",
        data_imported: "¡Datos importados correctamente!",
        confirm_clear: "¿Estás seguro de que quieres borrar todos los datos? Esto no se puede deshacer.",
        no_data_export: "No hay datos para exportar",

        expenses_list: "Lista de Gastos",
        no_expenses: "No hay gastos añadidos todavía",
        edit: "Editar",
        delete: "Eliminar",

        upload_receipts: "Subir Recibos",
        receipts_count: "Recibos subidos:",
        drag_drop: "Arrastra y suelta imágenes aquí",
        or_click: "o haz clic para seleccionar archivos",
        or_use_buttons: "o usa los botones de arriba",
        select_files: "Subir Archivos",
        take_photo: "Tomar Foto",
        camera_title: "Tomar Foto",
        capture: "Capturar",
        retake: "Repetir",
        use_photo: "Usar Foto",
        camera_error: "Acceso a cámara denegado o no disponible",

        generate_pdf: "Generar Informe PDF",
        validation_warning: "Advertencia: Tienes {expenses} gastos pero {receipts} recibos. ¿Continuar de todos modos?",
        pdf_generating: "Generando PDF...",
        pdf_error: "Error al generar PDF. Por favor, inténtalo de nuevo.",

        developed_by: "Desarrollado por",

        total: "Total:",

        // Validation messages
        validation_error: "Error de Validación",
        validation_amount: "Por favor, ingresa una cantidad válida mayor a 0.",
        validation_description: "Por favor, ingresa una descripción.",
        validation_reason: "Por favor, ingresa un motivo para este gasto.",
        validation_reason_travel: "Por favor, ingresa un motivo para este viaje.",
        validation_date: "Por favor, selecciona una fecha.",
        validation_km: "Por favor, ingresa kilómetros válidos mayores a 0.",
        validation_profile: "Por favor, completa tu perfil (Nombre y Área) antes de generar el PDF.",
        validation_missing_receipts: "Debes subir al menos una imagen de recibo antes de generar el PDF.",
        validation_insufficient_receipts: "Tienes {expenses} gastos pero solo {receipts} recibos. Por favor, sube un recibo por cada gasto.",
        validation_extra_receipts: "Tienes {receipts} recibos pero solo {expenses} gastos. ¿Deseas continuar?",
        incomplete_profile: "Perfil Incompleto",
        missing_receipts: "Recibos Faltantes",
        insufficient_receipts: "Recibos Insuficientes",
        extra_receipts: "Recibos Extra"
    },
    ca: {
        password_title: "Introduïu la Contrasenya",
        password_submit: "Enviar",
        password_error: "Contrasenya incorrecta. Torneu-ho a provar.",

        profile_title: "Perfil d'Usuari",
        full_name: "Nom Complet",
        area: "Àrea",
        iban: "IBAN",
        iban_note: "Per a reemborsament",
        save_profile: "Desar Perfil",

        app_title: "Generador d'Informes de Despeses",
        upload_logo: "Pujar Logo",

        step_expenses: "Afegir Despeses",
        step_receipts: "Afegir Rebuts",
        step_generate: "Generar PDF",

        total_expenses: "Total de Despeses",
        total_amount: "Quantitat Total",
        total_receipts: "Total de Rebuts",

        add_expense: "Afegir Despesa",
        amount: "Quantitat (€)",
        kilometers: "Quilòmetres",
        km_rate: "Tarifa: 0.26€ per km",
        description: "Descripció",
        reason: "Motiu",
        date: "Data",
        add_expense_btn: "Afegir Despesa",
        km_tracking: "Seguiment de Quilòmetres",
        add_km: "Afegir Entrada de Quilòmetres",
        km_list: "Despeses de Quilòmetres",
        no_km_expenses: "No hi ha despeses de quilòmetres afegides encara",

        duplicate_last: "Duplicar Últim",
        clear_all: "Esborrar Tot",
        today: "Avui",
        yesterday: "Ahir",

        export_data: "Exportar Dades",
        import_data: "Importar Dades",
        data_exported: "Dades exportades correctament!",
        data_imported: "Dades importades correctament!",
        confirm_clear: "Estàs segur que vols esborrar totes les dades? Això no es pot desfer.",
        no_data_export: "No hi ha dades per exportar",

        expenses_list: "Llista de Despeses",
        no_expenses: "No hi ha despeses afegides encara",
        edit: "Editar",
        delete: "Eliminar",

        upload_receipts: "Pujar Rebuts",
        receipts_count: "Rebuts pujats:",
        drag_drop: "Arrossega i deixa anar imatges aquí",
        or_click: "o fes clic per seleccionar fitxers",
        or_use_buttons: "o utilitza els botons de dalt",
        select_files: "Pujar Fitxers",
        take_photo: "Fer Foto",
        camera_title: "Fer Foto",
        capture: "Capturar",
        retake: "Repetir",
        use_photo: "Utilitzar Foto",
        camera_error: "Accés a la càmera denegat o no disponible",

        generate_pdf: "Generar Informe PDF",
        validation_warning: "Avís: Tens {expenses} despeses però {receipts} rebuts. Continuar igualment?",
        pdf_generating: "Generant PDF...",
        pdf_error: "Error en generar PDF. Si us plau, torneu-ho a provar.",

        developed_by: "Desenvolupat per",

        total: "Total:",

        // Validation messages
        validation_error: "Error de Validació",
        validation_amount: "Si us plau, introdueix una quantitat vàlida major a 0.",
        validation_description: "Si us plau, introdueix una descripció.",
        validation_reason: "Si us plau, introdueix un motiu per aquesta despesa.",
        validation_reason_travel: "Si us plau, introdueix un motiu per aquest viatge.",
        validation_date: "Si us plau, selecciona una data.",
        validation_km: "Si us plau, introdueix quilòmetres vàlids majors a 0.",
        validation_profile: "Si us plau, completa el teu perfil (Nom i Àrea) abans de generar el PDF.",
        validation_missing_receipts: "Has de pujar almenys una imatge de rebut abans de generar el PDF.",
        validation_insufficient_receipts: "Tens {expenses} despeses però només {receipts} rebuts. Si us plau, puja un rebut per cada despesa.",
        validation_extra_receipts: "Tens {receipts} rebuts però només {expenses} despeses. Vols continuar?",
        incomplete_profile: "Perfil Incomplet",
        missing_receipts: "Rebuts Faltants",
        insufficient_receipts: "Rebuts Insuficients",
        extra_receipts: "Rebuts Extra"
    }
};

let currentLanguage = localStorage.getItem('language') || 'es';

/**
 * Sets the application language and updates all UI texts
 * @author Santiago
 * @description Changes the current language, persists it to localStorage, and updates all translatable UI elements
 * @param {string} lang - The language code to set (en, es, or ca)
 * @returns {void}
 * @example
 * setLanguage('es');
 */
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updateTexts();
    updateLanguageButtons();
}

/**
 * Updates all translatable text elements in the DOM
 * @author Santiago
 * @description Finds all elements with data-i18n attribute and updates their content based on current language
 * @returns {void}
 * @example
 * updateTexts();
 */
function updateTexts() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLanguage][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[currentLanguage][key];
            } else {
                element.textContent = translations[currentLanguage][key];
            }
        }
    });
}

function updateLanguageButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
        }
    });
}

/**
 * Translates a key to the current language with optional parameter substitution
 * @author Santiago
 * @description Returns the translated string for the given key in the current language, with support for variable interpolation
 * @param {string} key - The translation key to look up
 * @param {Object} [params={}] - Optional object containing variables to substitute in the translation
 * @returns {string} The translated string with parameters substituted
 * @example
 * t('password_error');
 * t('validation_warning', { expenses: 5, receipts: 3 });
 */
function t(key, params = {}) {
    let text = translations[currentLanguage][key] || key;
    Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, params[param]);
    });
    return text;
}

document.addEventListener('DOMContentLoaded', () => {
    updateTexts();
    updateLanguageButtons();
});
