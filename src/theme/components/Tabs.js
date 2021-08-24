export default {
    parts: ["tab", "tablist", "tabpanel"],
    baseStyle: {
        tab: {
            fontFamily: "Roboto Mono",
            color: "#333",
            boxShadow: "none",
            padding: "7px 0 !important",
            marginRight: "21px",
            _selected: {
                color: "#0055f7 !important",
                borderBottom:"2px solid #0055f7"
            },
            _focus: {
                boxShadow: "none"
            }
        },
        tabpanel: {
            padding: 0
        }
    },
    defaultProps: {
        variant: "base"
    }
}