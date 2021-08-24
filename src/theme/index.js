import { extendTheme } from "@chakra-ui/react";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Text from "./components/Text";
import Progress from "./components/Progress";
import Tabs from "./components/Tabs";
import Avatar from "./components/Avatar";
import Tag from "./components/Tag";

const overrides = {
    colors: {
        brand: {
            500: "#0055f7"
        }
    },
    components: {
        Heading,
        Button,
        Text,
        Progress,
        Tabs,
        Avatar,
        Tag
    }
} 

export default extendTheme(overrides);