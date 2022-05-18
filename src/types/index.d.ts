import {Plugin, VueElement} from 'vue'

declare const PrinterPlugin: Plugin;

type PrinterPluginApi = (template: unknown, props?: Record<string, any>) => Promise<void>

declare module 'vue/types/vue' {
  interface VueConstructor {
    $print: PrinterPluginApi,
  }

  interface Vue {
    $print: PrinterPluginApi
  }
}

export default PrinterPlugin;
