export default {
  css: {
    inline: true
    // ^ enables CSS inlining for compiled HTML
    //   Docs: https://maizzle.com/docs/configuration/css
  },
  build: {
    content: [
      "emails/**/*.html",
      "dynamic_templates_maizzle/**/*.html"
    ],
    output: {
      path: "output" // compiled emails go here
      // Docs: https://maizzle.com/docs/configuration/build
    },
    static: [
      {
        source: ["static/**/*"],
        destination: "assets"
      }
    ]
  },
  components: {
    // Add custom folder IN ADDITION to defaults (components, layouts, emails)
    folders: ["dynamic_templates_maizzle"]
    // Docs: https://maizzle.com/docs/configuration/components
  }
}
