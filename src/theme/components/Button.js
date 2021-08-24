export default {
    baseStyle: {
        bg: "#0058f7",
        color: "#fff",
        borderRadius: "12px",
        fontFamily: "Roboto Mono"
    },
    variants: {
        "outline": {
            color: "#0058f7",
            bg: "#fff",
            border: "none"
        },
        "phantom": {
            backgroundColor: "#4E44CE",
        }
    },
    defaultProps: {
        variant: "base"
    }
}