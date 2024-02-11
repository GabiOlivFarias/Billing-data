import { createI18n } from 'vue-i18n'
import pt from './locales/pt.json'

function loadLocaleMessages() {
    const locales = [{pt: pt}]
    const messages = {}
    locales.forEach(lang => {
        const key = Object.keys(lang)
        messages[key] = lang[key]
    })
    return messages
}

export default createI18n({
    locale: 'pt',
    fallbackLocale: 'pt',
    messages: loadLocaleMessages()
})
