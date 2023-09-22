import '@unocss/reset/tailwind.css'

import 'virtual:uno.css'

/// Import Alpine.js
import Alpine from 'alpinejs'
/// Import Alpine.js plugins
//@ts-ignore
import focus from '@alpinejs/focus'
//@ts-ignore
import persist from '@alpinejs/persist'
//@ts-ignore
import Clipboard from "@ryangjchandler/alpine-clipboard"
import bocchi from "./bocchi.js"


/// load plugins
Alpine.plugin(focus)
Alpine.plugin(persist)
Alpine.plugin(Clipboard)
Alpine.data('bocchi', bocchi)
window.Alpine = Alpine
Alpine.start()
