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
        category: "Category",
        cat_food: "🍽️ Food",
        cat_transport: "🚗 Transport",
        cat_accommodation: "🏠 Accommodation",
        cat_materials: "📦 Materials",
        cat_others: "➕ Others",
        expense_type: "Expense Type",
        type_general: "General Expense",
        type_driving: "Driving",
        amount: "Amount (€)",
        kilometers: "Kilometers",
        km_rate: "Rate: 0.26€ per km",
        description: "Description",
        date: "Date",
        add_expense_btn: "Add Expense",

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

        total: "Total:"
    },
    es: {
        password_title: "Introducir Contraseña",
        password_submit: "Enviar",
        password_error: "Contraseña incorrecta. Inténtalo de nuevo.",

        profile_title: "Perfil de Usuario",
        full_name: "Nombre Completo",
        area: "Área",
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
        category: "Categoría",
        cat_food: "🍽️ Comida",
        cat_transport: "🚗 Transporte",
        cat_accommodation: "🏠 Alojamiento",
        cat_materials: "📦 Materiales",
        cat_others: "➕ Otros",
        expense_type: "Tipo de Gasto",
        type_general: "Gasto General",
        type_driving: "Conducción",
        amount: "Cantidad (€)",
        kilometers: "Kilómetros",
        km_rate: "Tarifa: 0.26€ por km",
        description: "Descripción",
        date: "Fecha",
        add_expense_btn: "Añadir Gasto",

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

        total: "Total:"
    },
    ca: {
        password_title: "Introduïu la Contrasenya",
        password_submit: "Enviar",
        password_error: "Contrasenya incorrecta. Torneu-ho a provar.",

        profile_title: "Perfil d'Usuari",
        full_name: "Nom Complet",
        area: "Àrea",
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
        category: "Categoria",
        cat_food: "🍽️ Menjar",
        cat_transport: "🚗 Transport",
        cat_accommodation: "🏠 Allotjament",
        cat_materials: "📦 Materials",
        cat_others: "➕ Altres",
        expense_type: "Tipus de Despesa",
        type_general: "Despesa General",
        type_driving: "Conducció",
        amount: "Quantitat (€)",
        kilometers: "Quilòmetres",
        km_rate: "Tarifa: 0.26€ per km",
        description: "Descripció",
        date: "Data",
        add_expense_btn: "Afegir Despesa",

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

        total: "Total:"
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

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
